import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeadStatus, Prisma } from '@prisma/client';

@Injectable()
export class ProspectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    skip?: number;
    take?: number;
    where?: Prisma.ProspectWhereInput;
    orderBy?: Prisma.ProspectOrderByWithRelationInput;
  }) {
    const { skip, take, where, orderBy } = params;
    return this.prisma.prospect.findMany({
      skip,
      take,
      where,
      orderBy,
      include: { businessEntity: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.prospect.findUnique({
      where: { id },
      include: { businessEntity: true },
    });
  }

  async updateStatus(id: string, leadStatus: LeadStatus) {
    return this.prisma.prospect.update({
      where: { id },
      data: { leadStatus },
    });
  }

  async addNote(id: string, notes: string) {
    return this.prisma.prospect.update({
      where: { id },
      data: { notes },
    });
  }
}
