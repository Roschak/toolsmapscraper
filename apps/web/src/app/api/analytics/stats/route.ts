import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const [
      totalProspects,
      hotLeads,
      websiteOpportunities,
      activeJobs,
      recentJobs,
      prospects,
    ] = await Promise.all([
      prisma.prospect.count(),
      prisma.prospect.count({ where: { priority: 'HOT' } }),
      prisma.prospect.count({
        where: {
          websiteStatus: { in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'] },
        },
      }),
      prisma.searchJob.count({ where: { status: 'RUNNING' } }),
      prisma.searchJob.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.prospect.findMany({
        select: {
          classification: true,
          city: true,
          leadStatus: true,
        },
      }),
    ]);

    const categoryMap: Record<string, number> = {};
    const regionMap: Record<string, number> = {};
    const statusMap: Record<string, number> = {};

    for (const p of prospects) {
      const cat = p.classification || 'Other';
      categoryMap[cat] = (categoryMap[cat] || 0) + 1;

      const reg = p.city || 'Global';
      regionMap[reg] = (regionMap[reg] || 0) + 1;

      const st = p.leadStatus || 'NEW';
      statusMap[st] = (statusMap[st] || 0) + 1;
    }

    const topCategories = Object.entries(categoryMap)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    const opportunitiesByRegion = Object.entries(regionMap)
      .map(([region, count]) => ({ region, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    const leadStatusBreakdown = Object.entries(statusMap).map(([status, count]) => ({
      status,
      count,
    }));

    return NextResponse.json({
      totalProspects,
      hotLeads,
      websiteOpportunities,
      opportunityRate: totalProspects > 0 ? Math.round((websiteOpportunities / totalProspects) * 100) : 0,
      activeJobs,
      topCategories,
      opportunitiesByRegion,
      leadStatusBreakdown,
      recentJobs,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
