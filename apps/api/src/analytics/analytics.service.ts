import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [
      totalProspects,
      hotLeads,
      websiteOpportunities,
      activeJobs,
      recentJobs,
      prospects,
    ] = await Promise.all([
      this.prisma.prospect.count(),
      this.prisma.prospect.count({ where: { priority: 'HOT' } }),
      this.prisma.prospect.count({
        where: {
          websiteStatus: { in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'] },
        },
      }),
      this.prisma.searchJob.count({ where: { status: 'RUNNING' } }),
      this.prisma.searchJob.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.prospect.findMany({
        select: {
          classification: true,
          city: true,
          leadStatus: true,
        },
      }),
    ]);

    // Aggregate categories
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
      status: status as any,
      count,
    }));

    return {
      totalProspects,
      hotLeads,
      websiteOpportunities,
      opportunityRate: totalProspects > 0 ? Math.round((websiteOpportunities / totalProspects) * 100) : 0,
      activeJobs,
      topCategories,
      opportunitiesByRegion,
      leadStatusBreakdown,
      recentJobs,
    };
  }
}
