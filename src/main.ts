import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './chats/RedisIoAdapter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  redisIoAdapter.bindClientConnect
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
