import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app/app.module";
import { QueryExceptionFilter } from './shared/Exceptions/query-Exception.filter';
import { HttpExceptionFilter } from './shared/Exceptions/http-exception.filter';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new QueryExceptionFilter());
  setupSwagger(app);
  await app.listen(3001);
}

bootstrap();
