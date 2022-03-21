import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(5000);
  console.log(`App listening on PORT 5000`);
  console.log(`Proceed with: http://localhost:5000`);
}
bootstrap();
