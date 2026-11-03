import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { SearchEngine } from '@prospecthunter/search-engine';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('pageSize') || '20', 10)));
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      prisma.searchJob.findMany({
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.searchJob.count(),
    ]);

    return NextResponse.json({
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const dto = await request.json();
    const jobName = dto.name || `Discovery ${dto.category || 'Business'} in ${dto.city || 'Global'}`;

    // 1. Create SearchJob in Database
    const job = await prisma.searchJob.create({
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

    // 2. Execute Scraping & Enrichment
    try {
      const enrichmentResult = await SearchEngine.searchAndEnrich(
        {
          city: dto.city || 'Jakarta',
          country: dto.country || 'Indonesia',
          category: dto.category || 'Restaurant',
          query: dto.query,
          limit: dto.limit || 10,
        },
        dto.provider
      );

      let savedProspects = 0;

      for (const candidate of enrichmentResult.candidates) {
        let businessEntity = await prisma.businessEntity.findFirst({
          where: {
            canonicalName: {
              equals: candidate.canonicalName,
              mode: 'insensitive',
            },
          },
        });

        if (!businessEntity) {
          businessEntity = await prisma.businessEntity.create({
            data: {
              canonicalName: candidate.canonicalName,
              country: candidate.country,
              region: candidate.region,
              city: candidate.city,
              address: candidate.address,
              latitude: candidate.latitude,
              longitude: candidate.longitude,
              categories: candidate.raw?.categories || [candidate.classification],
              primaryCategory: candidate.classification,
              businessModel: candidate.businessModel,
              businessDescription: candidate.businessDescription,
              operationalSummary: candidate.operationalSummary,
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

        await prisma.prospect.create({
          data: {
            businessEntityId: businessEntity.id,
            searchJobId: job.id,
            sourceType: candidate.sourceType as any,
            businessName: candidate.canonicalName,
            classification: candidate.classification,
            classificationConfidence: candidate.classificationConfidence,
            businessModel: candidate.businessModel,
            businessModelConfidence: candidate.businessModelConfidence,
            businessDescription: candidate.businessDescription,
            operationalSummary: candidate.operationalSummary,
            websiteStatus: candidate.websiteStatus as any,
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
            priority: candidate.priority as any,
            leadStatus: candidate.leadStatus as any,
            notes: candidate.notes,
            tags: candidate.tags,
            customFields: candidate.customFields,
          },
        });

        savedProspects++;
      }

      const updatedJob = await prisma.searchJob.update({
        where: { id: job.id },
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

      return NextResponse.json(updatedJob, { status: 201 });
    } catch (scrapingErr: any) {
      console.error('Scraping execution error in Vercel API:', scrapingErr);
      const failedJob = await prisma.searchJob.update({
        where: { id: job.id },
        data: {
          status: 'FAILED',
          error: scrapingErr.message,
          completedAt: new Date(),
        },
      });
      return NextResponse.json(failedJob, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
