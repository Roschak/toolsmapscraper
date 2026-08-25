import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SearchJobCreateInput) {
    return this.prisma.searchJob.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.SearchJobWhereInput;
    orderBy?: Prisma.SearchJobOrderByWithRelationInput;
  }) {
    const { skip, take, where, orderBy } = params;
    return this.prisma.searchJob.findMany({
      skip,
      take,
      where,
      orderBy: orderBy || { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.searchJob.findUnique({
      where: { id },
    });
  }
}
