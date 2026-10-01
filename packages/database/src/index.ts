import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client/index.js';

export * from './generated/client/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:password@localhost:5433/prospecthunter?schema=public';

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
export default prisma;
