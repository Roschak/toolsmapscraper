import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { config } from '@prospecthunter/config';
import { providerRegistry } from '@prospecthunter/providers';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async getSettings() {
    const dbSettings = await this.prisma.systemSetting.findMany();
    const settingsMap = Object.fromEntries(dbSettings.map((s) => [s.key, s.value]));

    const providers = providerRegistry.getAll().map((p) => ({
      type: p.sourceType,
      name: p.getName(),
      configured: p.isConfigured(),
      active: true,
    }));

    return {
      providers,
      limits: config.limits,
      scoringWeights: {
        noWebsiteScore: parseInt(settingsMap['noWebsiteScore'] || String(config.scoringWeights.noWebsiteScore), 10),
        highRatingScore: parseInt(settingsMap['highRatingScore'] || String(config.scoringWeights.highRatingScore), 10),
        reviewVolumeScore: parseInt(settingsMap['reviewVolumeScore'] || String(config.scoringWeights.reviewVolumeScore), 10),
        establishedLocationScore: parseInt(settingsMap['establishedLocationScore'] || String(config.scoringWeights.establishedLocationScore), 10),
        activePhoneScore: parseInt(settingsMap['activePhoneScore'] || String(config.scoringWeights.activePhoneScore), 10),
      },
      environment: {
        nodeEnv: config.env,
        databaseUrl: 'postgresql://***:***@localhost:5433/prospecthunter',
        mockMode: config.providers.mockMode,
      },
    };
  }

  async updateSettings(body: Record<string, string | number>) {
    const promises = Object.entries(body).map(([key, value]) =>
      this.prisma.systemSetting.upsert({
        where: { key },
        create: { key, value: String(value) },
        update: { value: String(value) },
      })
    );
    await Promise.all(promises);
    return this.getSettings();
  }
}
