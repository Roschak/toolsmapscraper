import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getAnalytics() {
    return this.analyticsService.getStats();
  }

  @Get('stats')
  getStats() {
    return this.analyticsService.getStats();
  }
}
