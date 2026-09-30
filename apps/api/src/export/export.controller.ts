import { Controller, Post, Get, Body, Param, Res } from '@nestjs/common';
import { ExportService } from './export.service';
import type { CreateExportDto } from '@prospecthunter/shared';
import type { Response } from 'express';

@Controller('export')
export class ExportController {
  constructor(private exportService: ExportService) {}

  @Post()
  async create(@Body() body: CreateExportDto) {
    return this.exportService.create(body);
  }

  @Get()
  async findAll() {
    return this.exportService.findAll();
  }

  @Get(':id/download')
  async download(@Param('id') id: string, @Res() res: Response) {
    const { filePath, format } = await this.exportService.getFilePath(id);
    const contentType = format === 'JSON' ? 'application/json' : 'text/csv';
    res.setHeader('Content-Disposition', `attachment; filename=prospecthunter_export_${id}.${format.toLowerCase()}`);
    res.setHeader('Content-Type', contentType);
    return res.sendFile(filePath);
  }
}
