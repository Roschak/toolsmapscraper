import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prospecthunter/database';

const connectionString =
  process.env.DATABASE_URL ||
  process.env.DIRECT_URL ||
  'postgresql://postgres.qzymdqhjjvhtccxmzyqh:iLfLQ7PXHKd2ZZgL@aws-1-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true';

const isRemote =
  connectionString.includes('supabase.co') ||
  connectionString.includes('supabase.com') ||
  connectionString.includes('pooler.supabase.com') ||
  connectionString.includes('sslmode=') ||
  connectionString.includes('neon.tech') ||
  connectionString.includes('railway.app') ||
  connectionString.includes('render.com');

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  (() => {
    const pool = new Pool({
      connectionString,
      ssl: isRemote ? { rejectUnauthorized: false } : undefined,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 8000,
    });
    const adapter = new PrismaPg(pool);
    const client = new PrismaClient({ adapter });
    return client;
  })();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
