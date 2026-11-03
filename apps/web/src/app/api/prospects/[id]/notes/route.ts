import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/db';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { content, authorName } = await request.json();

    if (!content || !content.trim()) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const note = await prisma.leadNote.create({
      data: {
        prospectId: params.id,
        content: content.trim(),
        authorName: authorName || 'Sales Agent',
      },
    });

    return NextResponse.json(note, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
