import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';
import { ProspectsModule } from './prospects/prospects.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ExportModule } from './export/export.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    SearchModule,
    ProspectsModule,
    AnalyticsModule,
    ExportModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
