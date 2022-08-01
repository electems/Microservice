/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { UserModule } from './userModule';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3003);
}
bootstrap();
