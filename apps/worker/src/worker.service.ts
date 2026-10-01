import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SearchEngine } from '@prospecthunter/search-engine';

@Injectable()
export class WorkerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(WorkerService.name);
  private timer: NodeJS.Timeout | null = null;
  private isProcessing = false;

  constructor(private prisma: PrismaService) {}

  onModuleInit() {
    this.logger.log('ProspectHunter Worker Queue Engine Initialized.');
    // Poll for queued jobs every 5 seconds
    this.timer = setInterval(() => this.pollJobs(), 5000);
  }

  onModuleDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private async pollJobs() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    try {
      // Find oldest QUEUED search job
      const queuedJob = await this.prisma.searchJob.findFirst({
        where: { status: 'QUEUED' },
        orderBy: { createdAt: 'asc' },
      });

      if (queuedJob) {
        await this.processSearchJob(queuedJob.id);
      }
    } catch (err: any) {
      this.logger.error(`Error in worker polling: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }

  private async processSearchJob(jobId: string) {
    this.logger.log(`Worker picked up search job ${jobId}`);

    await this.prisma.searchJob.update({
      where: { id: jobId },
      data: { status: 'RUNNING', startedAt: new Date() },
    });

    try {
      const job = await this.prisma.searchJob.findUnique({ where: { id: jobId } });
      if (!job) return;

      const enrichmentResult = await SearchEngine.searchAndEnrich(
        {
          city: job.city || 'Jakarta',
          country: job.country || 'Indonesia',
          category: job.category || 'Restaurant',
          query: job.query || undefined,
          limit: 30,
        },
        job.provider || undefined
      );

      let saved = 0;
      for (const candidate of enrichmentResult.candidates) {
        let entity = await this.prisma.businessEntity.findFirst({
          where: { canonicalName: { equals: candidate.canonicalName, mode: 'insensitive' } },
        });

        if (!entity) {
          entity = await this.prisma.businessEntity.create({
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

        await this.prisma.prospect.create({
          data: {
            businessEntityId: entity.id,
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
            leadStatus: 'NEW',
            notes: candidate.notes,
            tags: candidate.tags,
          },
        });
        saved++;
      }

      await this.prisma.searchJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          progress: 100,
          totalTasks: enrichmentResult.rawCount,
          completedTasks: saved,
          resultCount: saved,
          duplicateCount: enrichmentResult.duplicateCount,
          websiteOpportunityCount: enrichmentResult.websiteOpportunityCount,
          websiteListedCount: saved - enrichmentResult.websiteOpportunityCount,
          completedAt: new Date(),
        },
      });

      this.logger.log(`Worker completed job ${jobId} with ${saved} prospects.`);
    } catch (err: any) {
      this.logger.error(`Search job ${jobId} failed: ${err.message}`);
      await this.prisma.searchJob.update({
        where: { id: jobId },
        data: {
          status: 'FAILED',
          error: err.message,
          completedAt: new Date(),
        },
      });
    }
  }
}
