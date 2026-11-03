import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/db';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.exportJob.findUnique({
      where: { id: params.id },
    });

    if (!job) {
      return NextResponse.json({ error: 'Export job not found' }, { status: 404 });
    }

    const format = (job.format || 'CSV').toUpperCase();
    const fileName = `prospects_export_${job.id.slice(0, 8)}.${format.toLowerCase()}`;
    const tmpFile = path.join(os.tmpdir(), 'exports', `export_${job.id}.${format.toLowerCase()}`);

    let fileData: string;

    if (fs.existsSync(tmpFile)) {
      fileData = fs.readFileSync(tmpFile, 'utf-8');
    } else {
      // Regenerate on the fly if container restarted
      const prospects = await prisma.prospect.findMany({
        include: { businessEntity: true },
        orderBy: { leadScore: 'desc' },
      });

      if (format === 'JSON') {
        fileData = JSON.stringify(prospects, null, 2);
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

        fileData = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
      }
    }

    const contentType = format === 'JSON' ? 'application/json' : 'text/csv';

    return new NextResponse(fileData, {
      status: 200,
      headers: {
        'Content-Type': `${contentType}; charset=utf-8`,
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
