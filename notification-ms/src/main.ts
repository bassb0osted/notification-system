import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const RMQ_URI = configService.get('RMQ_URI');
  const RMQ_USER_QUEUE = configService.get('RMQ_USER_QUEUE');

  const microserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [RMQ_URI],
      queue: RMQ_USER_QUEUE,
      queueOptions: {
        durable: true,
      },
    },
  };

  app.connectMicroservice(microserviceOptions);

  await app.startAllMicroservices();
}
bootstrap();
