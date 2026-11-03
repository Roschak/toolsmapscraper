import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import { ClassificationEngine } from '@prospecthunter/classification';
import { WebsiteDiscoveryEngine } from '@prospecthunter/website-discovery';
import { LeadScoringEngine } from '@prospecthunter/lead-scoring';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('pageSize') || '20', 10)));
    const skip = (page - 1) * pageSize;

    const query = searchParams.get('query');
    const city = searchParams.get('city');
    const country = searchParams.get('country');
    const priority = searchParams.get('priority');
    const leadStatus = searchParams.get('leadStatus');
    const websiteOpportunityOnly = searchParams.get('websiteOpportunityOnly') === 'true';
    const sortBy = searchParams.get('sortBy') || 'leadScore';
    const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc';

    const where: any = {};

    if (query) {
      where.OR = [
        { businessName: { contains: query, mode: 'insensitive' } },
        { city: { contains: query, mode: 'insensitive' } },
        { classification: { contains: query, mode: 'insensitive' } },
      ];
    }

    if (city && city !== 'ALL') {
      where.city = { contains: city, mode: 'insensitive' };
    }

    if (country) {
      where.country = { contains: country, mode: 'insensitive' };
    }

    if (priority && priority !== 'ALL') {
      where.priority = priority;
    }

    if (leadStatus && leadStatus !== 'ALL') {
      where.leadStatus = leadStatus;
    }

    if (websiteOpportunityOnly) {
      where.websiteStatus = {
        in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'],
      };
    }

    const orderBy: any = {};
    orderBy[sortBy] = sortOrder;

    const [items, total] = await Promise.all([
      prisma.prospect.findMany({
        where,
        skip,
        take: pageSize,
        orderBy,
        include: {
          businessEntity: true,
          leadNotes: {
            orderBy: { createdAt: 'desc' },
          },
        },
      }),
      prisma.prospect.count({ where }),
    ]);

    return NextResponse.json({
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    console.error('Error fetching prospects in Vercel API:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.businessName || !data.businessName.trim()) {
      return NextResponse.json({ error: 'Nama bisnis / perusahaan wajib diisi.' }, { status: 400 });
    }

    const businessName = data.businessName.trim();
    const city = data.city?.trim() || 'Jakarta';
    const country = data.country?.trim() || 'Indonesia';
    const address = data.address?.trim() || `Jl. Raya ${city}`;

    // 1. Klasifikasi otomatis bidang usaha & cakupan operasional
    const classification = ClassificationEngine.classify({
      businessName,
      rawCategories: data.category ? [data.category] : [],
      address,
      city,
      country,
      websiteStatus: data.websiteStatus,
    });

    // 2. Analisis website
    const webAnalysis = WebsiteDiscoveryEngine.analyze({
      rawWebsite: data.websiteUrl,
      businessName,
    });
    const finalWebsiteStatus = data.websiteStatus || webAnalysis.websiteStatus;

    // 3. Lead score
    const scoring = LeadScoringEngine.calculate({
      websiteStatus: finalWebsiteStatus as any,
      rating: 4.5,
      reviewCount: 25,
      phone: data.phone,
      address,
      businessStatus: 'OPERATIONAL',
    });

    // 4. Pastikan BusinessEntity
    let businessEntity = await prisma.businessEntity.findFirst({
      where: {
        canonicalName: {
          equals: businessName,
          mode: 'insensitive',
        },
      },
    });

    if (!businessEntity) {
      businessEntity = await prisma.businessEntity.create({
        data: {
          canonicalName: businessName,
          country,
          region: data.region || 'DKI Jakarta',
          city,
          address,
          phone: data.phone,
          website: data.websiteUrl || webAnalysis.websiteUrl,
          categories: data.category ? [data.category] : [classification.subCategory],
          primaryCategory: classification.subCategory,
          businessModel: classification.businessModel,
          businessDescription: classification.businessDescription,
          operationalSummary: classification.operationalFocus,
          sourceProviders: ['MANUAL'],
          dataConfidence: 'USER_PROVIDED',
        },
      });
    }

    // 5. Simpan Prospek ke Supabase
    const tags = ['MANUAL', classification.industry];
    if (finalWebsiteStatus !== 'WEBSITE_LISTED') tags.push('NO_WEBSITE_OPPORTUNITY');
    if (scoring.priority === 'HOT') tags.push('HOT_LEAD');

    const prospect = await prisma.prospect.create({
      data: {
        businessEntityId: businessEntity.id,
        sourceType: 'MANUAL',
        businessName,
        classification: classification.subCategory,
        classificationConfidence: classification.classificationConfidence,
        businessModel: classification.businessModel,
        businessModelConfidence: classification.businessModelConfidence,
        businessDescription: classification.businessDescription,
        operationalSummary: classification.operationalFocus,
        websiteStatus: finalWebsiteStatus as any,
        websiteUrl: data.websiteUrl || webAnalysis.websiteUrl,
        websiteConfidence: webAnalysis.websiteConfidence,
        phone: data.phone,
        country,
        region: data.region || 'DKI Jakarta',
        city,
        address,
        leadScore: data.leadScore || scoring.score,
        priority: data.priority || scoring.priority,
        leadStatus: 'NEW',
        demoStatus: 'NOT_CREATED',
        notes: data.notes
          ? `${data.notes}\n\n${classification.businessDescription}`
          : classification.businessDescription,
        tags,
        customFields: {
          sector: classification.sector,
          operationalFocus: classification.operationalFocus,
          operatingLocation: classification.operatingLocation,
          businessDescription: classification.businessDescription,
          opportunityExplanation: classification.opportunityExplanation,
        },
      },
      include: {
        businessEntity: true,
        leadNotes: true,
      },
    });

    return NextResponse.json(prospect, { status: 201 });
  } catch (error: any) {
    console.error('Error creating prospect in Vercel API:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
