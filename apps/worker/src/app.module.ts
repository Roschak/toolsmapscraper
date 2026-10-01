import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { WorkerService } from './worker.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, WorkerService],
})
export class AppModule {}
