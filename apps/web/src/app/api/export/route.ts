import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export const dynamic = 'force-dynamic';

function getExportsDir() {
  const dir = path.join(os.tmpdir(), 'exports');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

export async function GET() {
  try {
    const items = await prisma.exportJob.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
    });
    return NextResponse.json({ items });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const dto = await request.json().catch(() => ({}));
    const format = (dto.format || 'CSV').toUpperCase();

    const job = await prisma.exportJob.create({
      data: {
        format,
        query: dto.filters || {},
        status: 'RUNNING',
      },
    });

    const prospects = await prisma.prospect.findMany({
      include: { businessEntity: true },
      orderBy: { leadScore: 'desc' },
    });

    const exportsDir = getExportsDir();
    const fileName = `export_${job.id}.${format.toLowerCase()}`;
    const filePath = path.join(exportsDir, fileName);

    if (format === 'JSON') {
      fs.writeFileSync(filePath, JSON.stringify(prospects, null, 2), 'utf-8');
    } else {
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
        'Penjelasan Bidang Usaha (Business Activity)',
        'Lokasi Operasional (Where It Operates)',
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
        `"${(p.businessDescription || p.notes || '').replace(/"/g, '""')}"`,
        `"${(p.operationalSummary || `${p.city || ''}, ${p.country || ''}`).replace(/"/g, '""')}"`,
      ]);

      const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      fs.writeFileSync(filePath, csvContent, 'utf-8');
    }

    const updated = await prisma.exportJob.update({
      where: { id: job.id },
      data: {
        status: 'COMPLETED',
        recordCount: prospects.length,
        fileUrl: `/api/export/${job.id}/download`,
        completedAt: new Date(),
      },
    });

    return NextResponse.json(updated, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
