import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  });

  await app.listen(configService.get('PORT'));
  console.log(configService.get('PORT'))
}

bootstrap();
