import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const all = await prisma.systemSetting.findMany();
    const map: Record<string, any> = {
      SEARCH_DAILY_LIMIT: 50000,
      SEARCH_MONTHLY_LIMIT: 1000000,
      MOCK_MODE: true,
      DEFAULT_COUNTRY: 'Indonesia',
      AUTO_ENRICH_LEADS: true,
      EXPORT_RETENTION_DAYS: 30,
    };
    for (const item of all) {
      map[item.key] = item.value;
    }
    return NextResponse.json(map);
  } catch (error: any) {
    return NextResponse.json({
      SEARCH_DAILY_LIMIT: 50000,
      SEARCH_MONTHLY_LIMIT: 1000000,
      MOCK_MODE: true,
      DEFAULT_COUNTRY: 'Indonesia',
      AUTO_ENRICH_LEADS: true,
      EXPORT_RETENTION_DAYS: 30,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    for (const [key, value] of Object.entries(body)) {
      await prisma.systemSetting.upsert({
        where: { key },
        create: { key, value: String(value) },
        update: { value: String(value) },
      });
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
