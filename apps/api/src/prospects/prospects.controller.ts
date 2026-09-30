import { Controller, Get, Patch, Post, Delete, Param, Query, Body, Req } from '@nestjs/common';
import { ProspectsService } from './prospects.service';
import type { LeadPriority, LeadStatus, UpdateProspectDto } from '@prospecthunter/shared';

@Controller('prospects')
export class ProspectsController {
  constructor(private prospectsService: ProspectsService) {}

  @Get()
  async findAll(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('query') query?: string,
    @Query('country') country?: string,
    @Query('city') city?: string,
    @Query('priority') priority?: LeadPriority,
    @Query('leadStatus') leadStatus?: LeadStatus,
    @Query('websiteOpportunityOnly') websiteOpportunityOnly?: string,
    @Query('sortBy') sortBy?: 'leadScore' | 'rating' | 'createdAt',
    @Query('sortOrder') sortOrder?: 'asc' | 'desc'
  ) {
    return this.prospectsService.findAll({
      page: page ? parseInt(page, 10) : 1,
      pageSize: pageSize ? parseInt(pageSize, 10) : 20,
      query,
      country,
      city,
      priority,
      leadStatus,
      websiteOpportunityOnly: websiteOpportunityOnly === 'true',
      sortBy,
      sortOrder,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prospectsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProspectDto) {
    return this.prospectsService.update(id, body);
  }

  @Post(':id/notes')
  async addNote(@Param('id') id: string, @Body('content') content: string, @Req() req: any) {
    const authorName = req.user?.name || 'Sales Agent';
    const authorId = req.user?.sub;
    return this.prospectsService.addNote(id, content, authorName, authorId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.prospectsService.delete(id);
  }
}
