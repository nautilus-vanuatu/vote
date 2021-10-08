import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

const logger = new Logger('Main');
const configService = new ConfigService();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RABBIT_MQ_SERVERS')],
      queue: configService.get<string>('RABBIT_MQ_TOPIC'),
      noAck: false,
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen(() => logger.log('Vote MS is listening...'));
}
bootstrap();
