import { Controller, Get, Body, Patch, Param, Query } from '@nestjs/common';
import { ProspectsService } from './prospects.service';
import { LeadStatus, Prisma } from '@prisma/client';

@Controller('prospects')
export class ProspectsController {
  constructor(private readonly prospectsService: ProspectsService) {}

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('status') status?: LeadStatus,
  ) {
    const where: Prisma.ProspectWhereInput = {};
    if (status) {
      where.leadStatus = status;
    }
    
    return this.prospectsService.findAll({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      where,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prospectsService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: LeadStatus) {
    return this.prospectsService.updateStatus(id, status);
  }

  @Patch(':id/notes')
  addNote(@Param('id') id: string, @Body('notes') notes: string) {
    return this.prospectsService.addNote(id, notes);
  }
}
