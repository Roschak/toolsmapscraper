import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prospecthunter/database';
import { execSync } from 'child_process';
import * as path from 'path';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private pool: Pool;

  constructor() {
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
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
    await this.autoInitDatabaseSchema();
  }

  /**
   * Memastikan tabel-tabel di database terbuat secara otomatis jika belum ada.
   */
  async autoInitDatabaseSchema() {
    try {
      // Cek apakah tabel utama sudah ada di database
      await this.user.count();
    } catch (error: any) {
      this.logger.warn('Tabel database belum terdeteksi. Membuat tabel otomatis ke database...');
      try {
        const schemaPath = path.resolve(process.cwd(), 'packages/database/prisma/schema.prisma');
        execSync(`npx prisma db push --schema="${schemaPath}" --skip-generate --accept-data-loss`, {
          cwd: process.cwd(),
          stdio: 'pipe',
          env: process.env,
        });
        this.logger.log('Tabel database berhasil terbuat otomatis!');
      } catch (pushErr: any) {
        this.logger.error('Gagal membuat tabel otomatis:', pushErr.message);
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
  }
}
