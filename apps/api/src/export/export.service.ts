import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExportDto } from '@prospecthunter/shared';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ExportService {
  private exportsDir: string;

  constructor(private prisma: PrismaService) {
    this.exportsDir = path.resolve(process.cwd(), 'data', 'exports');
    if (!fs.existsSync(this.exportsDir)) {
      fs.mkdirSync(this.exportsDir, { recursive: true });
    }
  }

  async create(dto: CreateExportDto) {
    const format = dto.format || 'CSV';
    const where: any = {};

    if (dto.filters?.country) {
      where.country = { contains: dto.filters.country, mode: 'insensitive' };
    }
    if (dto.filters?.city) {
      where.city = { contains: dto.filters.city, mode: 'insensitive' };
    }
    if (dto.filters?.priority) {
      where.priority = dto.filters.priority;
    }
    if (dto.filters?.leadStatus) {
      where.leadStatus = dto.filters.leadStatus;
    }
    if (dto.filters?.websiteOpportunityOnly) {
      where.websiteStatus = {
        in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'],
      };
    }
    if (dto.filters?.searchJobId) {
      where.searchJobId = dto.filters.searchJobId;
    }

    const job = await this.prisma.exportJob.create({
      data: {
        format,
        query: dto.filters as any,
        status: 'RUNNING',
      },
    });

    try {
      const prospects = await this.prisma.prospect.findMany({
        where,
        include: { businessEntity: true },
        orderBy: { leadScore: 'desc' },
      });

      const fileName = `export_${job.id}.${format.toLowerCase()}`;
      const filePath = path.join(this.exportsDir, fileName);

      if (format === 'JSON') {
        fs.writeFileSync(filePath, JSON.stringify(prospects, null, 2), 'utf-8');
      } else {
        // CSV Format
        const headers = [
          'ID',
          'Business Name',
          'Category',
          'Business Model',
          'Website Status',
          'Website URL',
          'Phone',
          'Address',
          'City',
          'Country',
          'Rating',
          'Reviews',
          'Lead Score',
          'Priority',
          'Status',
          'Source',
        ];

        const rows = prospects.map((p) => [
          p.id,
          `"${(p.businessName || '').replace(/"/g, '""')}"`,
          `"${(p.classification || '').replace(/"/g, '""')}"`,
          p.businessModel || '',
          p.websiteStatus,
          `"${(p.websiteUrl || '').replace(/"/g, '""')}"`,
          `"${(p.phone || '').replace(/"/g, '""')}"`,
          `"${(p.address || '').replace(/"/g, '""')}"`,
          `"${(p.city || '').replace(/"/g, '""')}"`,
          `"${(p.country || '').replace(/"/g, '""')}"`,
          p.rating ?? '',
          p.reviewCount ?? '',
          p.leadScore ?? '',
          p.priority ?? '',
          p.leadStatus,
          p.sourceType,
        ]);

        const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
        fs.writeFileSync(filePath, csvContent, 'utf-8');
      }

      const updated = await this.prisma.exportJob.update({
        where: { id: job.id },
        data: {
          status: 'COMPLETED',
          recordCount: prospects.length,
          fileUrl: `/api/export/${job.id}/download`,
          completedAt: new Date(),
        },
      });

      return updated;
    } catch (err: any) {
      await this.prisma.exportJob.update({
        where: { id: job.id },
        data: {
          status: 'FAILED',
          error: err.message,
          completedAt: new Date(),
        },
      });
      throw err;
    }
  }

  async findAll() {
    return this.prisma.exportJob.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async getFilePath(id: string): Promise<{ filePath: string; format: string }> {
    const job = await this.prisma.exportJob.findUnique({ where: { id } });
    if (!job) throw new NotFoundException('Export job not found');

    const fileName = `export_${job.id}.${job.format.toLowerCase()}`;
    const filePath = path.join(this.exportsDir, fileName);

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('Export file not found on disk');
    }

    return { filePath, format: job.format };
  }
}
