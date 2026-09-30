import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchEngine } from '@prospecthunter/search-engine';
import { CreateSearchJobDto } from '@prospecthunter/shared';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSearchJobDto) {
    const jobName = dto.name || `Discovery ${dto.category || 'Business'} in ${dto.city || 'Global'}`;

    // 1. Create SearchJob in Database
    const job = await this.prisma.searchJob.create({
      data: {
        name: jobName,
        country: dto.country || 'Indonesia',
        region: dto.region || 'DKI Jakarta',
        city: dto.city || 'Jakarta',
        district: dto.district,
        category: dto.category || 'Restaurant',
        keywords: dto.keywords,
        query: dto.query,
        scope: dto.scope || 'REGIONAL',
        provider: dto.provider || 'ALL',
        status: 'RUNNING',
        startedAt: new Date(),
      },
    });

    // 2. Execute pipeline asynchronously so user gets instant response
    this.processSearchJob(job.id, dto).catch((err) => {
      console.error(`SearchJob ${job.id} failed:`, err);
    });

    return job;
  }

  private async processSearchJob(jobId: string, dto: CreateSearchJobDto) {
    try {
      const enrichmentResult = await SearchEngine.searchAndEnrich(
        {
          city: dto.city || 'Jakarta',
          country: dto.country || 'Indonesia',
          category: dto.category || 'Restaurant',
          query: dto.query,
          limit: dto.limit || 25,
        },
        dto.provider
      );

      let savedProspects = 0;

      for (const candidate of enrichmentResult.candidates) {
        // Find existing business entity or create new canonical entity
        let businessEntity = await this.prisma.businessEntity.findFirst({
          where: {
            canonicalName: {
              equals: candidate.canonicalName,
              mode: 'insensitive',
            },
          },
        });

        if (!businessEntity) {
          businessEntity = await this.prisma.businessEntity.create({
            data: {
              canonicalName: candidate.canonicalName,
              country: candidate.country,
              region: candidate.region,
              city: candidate.city,
              address: candidate.address,
              latitude: candidate.latitude,
              longitude: candidate.longitude,
              categories: candidate.raw.categories,
              primaryCategory: candidate.classification,
              businessModel: candidate.businessModel,
              phone: candidate.phone,
              website: candidate.websiteUrl,
              rating: candidate.rating,
              reviewCount: candidate.reviewCount,
              businessStatus: candidate.businessStatus,
              sourceProviders: [candidate.sourceType],
              dataConfidence: 'HIGH',
            },
          });
        }

        // Create Prospect
        await this.prisma.prospect.create({
          data: {
            businessEntityId: businessEntity.id,
            searchJobId: jobId,
            sourceType: candidate.sourceType,
            businessName: candidate.canonicalName,
            classification: candidate.classification,
            classificationConfidence: candidate.classificationConfidence,
            businessModel: candidate.businessModel,
            businessModelConfidence: candidate.businessModelConfidence,
            websiteStatus: candidate.websiteStatus,
            websiteUrl: candidate.websiteUrl,
            websiteConfidence: candidate.websiteConfidence,
            phone: candidate.phone,
            country: candidate.country,
            region: candidate.region,
            city: candidate.city,
            address: candidate.address,
            latitude: candidate.latitude,
            longitude: candidate.longitude,
            rating: candidate.rating,
            reviewCount: candidate.reviewCount,
            businessStatus: candidate.businessStatus,
            leadScore: candidate.leadScore,
            priority: candidate.priority,
            leadStatus: candidate.leadStatus,
            notes: candidate.notes,
            tags: candidate.tags,
          },
        });

        savedProspects++;
      }

      // Update SearchJob as completed
      await this.prisma.searchJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          progress: 100,
          totalTasks: enrichmentResult.rawCount,
          completedTasks: savedProspects,
          resultCount: savedProspects,
          duplicateCount: enrichmentResult.duplicateCount,
          websiteOpportunityCount: enrichmentResult.websiteOpportunityCount,
          websiteListedCount: savedProspects - enrichmentResult.websiteOpportunityCount,
          completedAt: new Date(),
        },
      });

      // Record Audit
      await this.prisma.auditLog.create({
        data: {
          action: 'SEARCH_COMPLETED',
          details: {
            jobId,
            foundCount: savedProspects,
            opportunityCount: enrichmentResult.websiteOpportunityCount,
          },
        },
      });
    } catch (err: any) {
      await this.prisma.searchJob.update({
        where: { id: jobId },
        data: {
          status: 'FAILED',
          error: err.message || 'Search execution failed',
          completedAt: new Date(),
        },
      });
    }
  }

  async findAll(params: { skip?: number; take?: number }) {
    const { skip = 0, take = 50 } = params;
    const [items, total] = await Promise.all([
      this.prisma.searchJob.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.searchJob.count(),
    ]);

    return {
      items,
      total,
      page: Math.floor(skip / take) + 1,
      pageSize: take,
      totalPages: Math.ceil(total / take),
    };
  }

  async findOne(id: string) {
    const job = await this.prisma.searchJob.findUnique({
      where: { id },
      include: {
        prospects: {
          take: 100,
          orderBy: { leadScore: 'desc' },
        },
      },
    });

    if (!job) throw new NotFoundException('Search job not found');
    return job;
  }

  async cancel(id: string) {
    return this.prisma.searchJob.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }
}
