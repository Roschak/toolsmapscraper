import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.searchJob.findUnique({
      where: { id: params.id },
      include: {
        prospects: {
          take: 50,
          orderBy: { leadScore: 'desc' },
          include: {
            businessEntity: true,
          },
        },
      },
    });

    if (!job) {
      return NextResponse.json({ error: 'Search job not found' }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
