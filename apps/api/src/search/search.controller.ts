import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Prisma } from '@prisma/client';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  create(@Body() createSearchDto: Prisma.SearchJobCreateInput) {
    return this.searchService.create(createSearchDto);
  }

  @Get()
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    return this.searchService.findAll({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchService.findOne(id);
  }
}
