import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URI],
      queue: process.env.RMQ_USER_QUEUE,
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.listen();
}
bootstrap();
