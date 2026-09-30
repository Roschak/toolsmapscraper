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
  await app.listen(port);
  console.log(`ProspectHunter API is running on http://localhost:${port}/api`);
}
bootstrap();
