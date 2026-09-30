import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LeadPriority, LeadStatus, UpdateProspectDto } from '@prospecthunter/shared';

@Injectable()
export class ProspectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: {
    page?: number;
    pageSize?: number;
    query?: string;
    country?: string;
    city?: string;
    priority?: LeadPriority;
    leadStatus?: LeadStatus;
    websiteOpportunityOnly?: boolean;
    sortBy?: 'leadScore' | 'rating' | 'createdAt';
    sortOrder?: 'asc' | 'desc';
  }) {
    const page = Math.max(1, params.page || 1);
    const pageSize = Math.min(100, Math.max(1, params.pageSize || 20));
    const skip = (page - 1) * pageSize;

    const where: any = {};

    if (params.query) {
      where.OR = [
        { businessName: { contains: params.query, mode: 'insensitive' } },
        { city: { contains: params.query, mode: 'insensitive' } },
        { classification: { contains: params.query, mode: 'insensitive' } },
      ];
    }

    if (params.country) {
      where.country = { contains: params.country, mode: 'insensitive' };
    }

    if (params.city) {
      where.city = { contains: params.city, mode: 'insensitive' };
    }

    if (params.priority) {
      where.priority = params.priority;
    }

    if (params.leadStatus) {
      where.leadStatus = params.leadStatus;
    }

    if (params.websiteOpportunityOnly) {
      where.websiteStatus = {
        in: ['NO_WEBSITE_LISTED', 'SOCIAL_ONLY', 'WEBSITE_UNCERTAIN', 'POSSIBLE_WEBSITE'],
      };
    }

    const orderBy: any = {};
    const sortField = params.sortBy || 'leadScore';
    orderBy[sortField] = params.sortOrder || 'desc';

    const [items, total] = await Promise.all([
      this.prisma.prospect.findMany({
        where,
        skip,
        take: pageSize,
        orderBy,
        include: {
          businessEntity: true,
          leadNotes: {
            orderBy: { createdAt: 'desc' },
            take: 5,
          },
        },
      }),
      this.prisma.prospect.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async findOne(id: string) {
    const prospect = await this.prisma.prospect.findUnique({
      where: { id },
      include: {
        businessEntity: true,
        searchJob: true,
        leadNotes: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!prospect) {
      throw new NotFoundException(`Prospect with ID ${id} not found`);
    }

    return prospect;
  }

  async update(id: string, dto: UpdateProspectDto) {
    await this.findOne(id);

    return this.prisma.prospect.update({
      where: { id },
      data: {
        leadStatus: dto.leadStatus,
        priority: dto.priority,
        demoStatus: dto.demoStatus,
        demoUrl: dto.demoUrl,
        notes: dto.notes,
        websiteStatus: dto.websiteStatus,
        websiteUrl: dto.websiteUrl,
        assignedTo: dto.assignedTo,
        tags: dto.tags,
      },
      include: {
        businessEntity: true,
        leadNotes: true,
      },
    });
  }

  async addNote(id: string, content: string, authorName?: string, authorId?: string) {
    await this.findOne(id);

    return this.prisma.leadNote.create({
      data: {
        prospectId: id,
        content,
        authorName: authorName || 'Sales Rep',
        authorId,
      },
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    return this.prisma.prospect.delete({
      where: { id },
    });
  }
}
