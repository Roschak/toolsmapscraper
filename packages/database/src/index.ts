import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client/index.js';

export * from './generated/client/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:password@localhost:5433/prospecthunter?schema=public';

const isRemote =
  connectionString.includes('supabase.co') ||
  connectionString.includes('supabase.com') ||
  connectionString.includes('pooler.supabase.com') ||
  connectionString.includes('sslmode=') ||
  connectionString.includes('neon.tech') ||
  connectionString.includes('railway.app') ||
  connectionString.includes('render.com');

const pool = new Pool({
  connectionString,
  ssl: isRemote ? { rejectUnauthorized: false } : undefined,
});
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
export default prisma;
