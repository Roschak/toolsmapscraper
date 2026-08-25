import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const totalBusinesses = await this.prisma.businessEntity.count();
    
    const hotLeads = await this.prisma.prospect.count({
      where: {
        priority: 'HOT'
      }
    });

    const websiteOpportunities = await this.prisma.prospect.count({
      where: {
        websiteStatus: {
          in: ['NO_WEBSITE_LISTED', 'POSSIBLE_WEBSITE', 'WEBSITE_UNCERTAIN']
        }
      }
    });

    return {
      totalBusinesses,
      hotLeads,
      websiteOpportunities
    };
  }
}
