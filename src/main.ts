import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExtendBuildinLogging as Logger } from '@/common/log/ExtendBuildinLogging';
export let app: INestApplication;

async function bootstrap() {
  app = await NestFactory.create(AppModule, {
    cors: true,
    logger: new Logger()
  });
  await app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
  });
}
bootstrap();
