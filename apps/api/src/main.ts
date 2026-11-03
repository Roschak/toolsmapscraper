import * as dotenv from 'dotenv';
import * as path from 'path';

// Load root .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend web client
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global prefix /api
  app.setGlobalPrefix('api');

  const port = process.env.API_PORT || process.env.PORT || 4000;
  await app.listen(port, '0.0.0.0');
  console.log(`ProspectHunter API is running on port ${port}`);
}
bootstrap();
