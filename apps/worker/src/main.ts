import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('ProspectHunter Background Worker Service started and listening for jobs.');
}
bootstrap();
