import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeadPriority, LeadStatus, UpdateProspectDto } from '@prospecthunter/shared';
import { ClassificationEngine } from '@prospecthunter/classification';
import { WebsiteDiscoveryEngine } from '@prospecthunter/website-discovery';
import { LeadScoringEngine } from '@prospecthunter/lead-scoring';

@Injectable()
export class ProspectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    page?: number;
    pageSize?: number;
    query?: string;
    country?: string;
    city?: string;
    priority?: LeadPriority;
    leadStatus?: LeadStatus;
    websiteOpportunityOnly?: boolean;
    sortBy?: 'leadScore' | 'rating' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
  }) {
    const page = Math.max(1, params.page || 1);
    const pageSize = Math.min(100, Math.max(1, params.pageSize || 20));
    const skip = (page - 1) * pageSize;

    const where: any = {};

    if (params.query) {
      where.OR = [
        { businessName: { contains: params.query, mode: 'insensitive' } },
        { city: { contains: params.query, mode: 'insensitive' } },
        { classification: { contains: params.query, mode: 'insensitive' } },
      ];
    }

    if (params.country) {
      where.country = { contains: params.country, mode: 'insensitive' };
    }

    if (params.city) {
      where.city = { contains: params.city, mode: 'insensitive' };
    }

    if (params.priority) {
      where.priority = params.priority;
    }

    if (params.leadStatus) {
      where.leadStatus = params.leadStatus;
    }

    if (params.websiteOpportunityOnly) {
      where.websiteStatus = {
        in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'],
      };
    }

    const orderBy: any = {};
    const sortField = params.sortBy || 'leadScore';
    orderBy[sortField] = params.sortOrder || 'desc';

    const [items, total] = await Promise.all([
      this.prisma.prospect.findMany({
        where,
        skip,
        take: pageSize,
        orderBy,
        include: {
          businessEntity: true,
          leadNotes: {
            orderBy: { createdAt: 'desc' },
            take: 5,
          },
        },
      }),
      this.prisma.prospect.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async findOne(id: string) {
    const prospect = await this.prisma.prospect.findUnique({
      where: { id },
      include: {
        businessEntity: true,
        searchJob: true,
        leadNotes: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!prospect) {
      throw new NotFoundException(`Prospect with ID ${id} not found`);
    }

    return prospect;
  }

  async update(id: string, dto: UpdateProspectDto) {
    await this.findOne(id);

    return this.prisma.prospect.update({
      where: { id },
      data: {
        leadStatus: dto.leadStatus,
        priority: dto.priority,
        demoStatus: dto.demoStatus,
        demoUrl: dto.demoUrl,
        notes: dto.notes,
        websiteStatus: dto.websiteStatus,
        websiteUrl: dto.websiteUrl,
        assignedTo: dto.assignedTo,
        tags: dto.tags,
      },
      include: {
        businessEntity: true,
        leadNotes: true,
      },
    });
  }

  async addNote(id: string, content: string, authorName?: string, authorId?: string) {
    await this.findOne(id);

    return this.prisma.leadNote.create({
      data: {
        prospectId: id,
        content,
        authorName: authorName || 'Sales Rep',
        authorId,
      },
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    return this.prisma.prospect.delete({
      where: { id },
    });
  }

  async importLeads(records: Array<{
    businessName: string;
    phone?: string;
    address?: string;
    city?: string;
    region?: string;
    country?: string;
    website?: string;
    category?: string;
  }>) {
    let importedCount = 0;
    const results: any[] = [];

    for (const record of records) {
      if (!record.businessName || !record.businessName.trim()) continue;

      const classification = ClassificationEngine.classify(
        record.businessName,
        record.category ? [record.category] : []
      );

      const webAnalysis = WebsiteDiscoveryEngine.analyze({
        rawWebsite: record.website,
        businessName: record.businessName,
      });

      const scoring = LeadScoringEngine.calculate({
        websiteStatus: webAnalysis.websiteStatus,
        rating: 4.0,
        reviewCount: 20,
        phone: record.phone,
        address: record.address,
      });

      // Find or create business entity
      let businessEntity = await this.prisma.businessEntity.findFirst({
        where: {
          canonicalName: { equals: record.businessName.trim(), mode: 'insensitive' },
        },
      });

      if (!businessEntity) {
        businessEntity = await this.prisma.businessEntity.create({
          data: {
            canonicalName: record.businessName.trim(),
            country: record.country || 'Indonesia',
            region: record.region || 'DKI Jakarta',
            city: record.city || 'Jakarta',
            address: record.address,
            phone: record.phone,
            website: webAnalysis.websiteUrl,
            categories: record.category ? [record.category] : ['Commercial'],
            primaryCategory: classification.subCategory,
            businessModel: classification.businessModel,
            sourceProviders: ['USER_IMPORT'],
            dataConfidence: 'USER_PROVIDED',
          },
        });
      }

      const tags = ['USER_IMPORT', classification.industry];
      if (webAnalysis.isOpportunity) tags.push('NO_WEBSITE_OPPORTUNITY');
      if (scoring.priority === 'HOT') tags.push('HOT_LEAD');

      const prospect = await this.prisma.prospect.create({
        data: {
          businessEntityId: businessEntity.id,
          sourceType: 'USER_IMPORT',
          businessName: record.businessName.trim(),
          classification: classification.subCategory,
          classificationConfidence: classification.classificationConfidence,
          businessModel: classification.businessModel,
          businessModelConfidence: classification.businessModelConfidence,
          websiteStatus: webAnalysis.websiteStatus,
          websiteUrl: webAnalysis.websiteUrl,
          websiteConfidence: webAnalysis.websiteConfidence,
          phone: record.phone,
          country: record.country || 'Indonesia',
          region: record.region || 'DKI Jakarta',
          city: record.city || 'Jakarta',
          address: record.address,
          leadScore: scoring.score,
          priority: scoring.priority,
          leadStatus: 'NEW',
          demoStatus: 'NOT_CREATED',
          notes: webAnalysis.notes,
          tags,
        },
      });

      results.push(prospect);
      importedCount++;
    }

    return {
      success: true,
      importedCount,
      prospects: results,
    };
  }

  async bulkUpdateStatus(ids: string[], leadStatus: LeadStatus) {
    const result = await this.prisma.prospect.updateMany({
      where: { id: { in: ids } },
      data: { leadStatus },
    });
    return { success: true, count: result.count };
  }

  async bulkDelete(ids: string[]) {
    const result = await this.prisma.prospect.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: true, count: result.count };
  }
}

