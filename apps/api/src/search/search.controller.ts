import { Controller, Post, Get, Body, Param, Query, Patch } from '@nestjs/common';
import { SearchService } from './search.service';
import type { CreateSearchJobDto } from '@prospecthunter/shared';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  async create(@Body() body: CreateSearchJobDto) {
    return this.searchService.create(body);
  }

  @Get()
  async findAll(@Query('page') page: string = '1', @Query('pageSize') pageSize: string = '20') {
    const p = parseInt(page, 10) || 1;
    const size = parseInt(pageSize, 10) || 20;
    return this.searchService.findAll({
      skip: (p - 1) * size,
      take: size,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.searchService.findOne(id);
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    return this.searchService.cancel(id);
  }
}
