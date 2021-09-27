import { NestFactory } from '@nestjs/core';
import { PigModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(PigModule);
  await app.listen(3000);
}

bootstrap();
