import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientProxyGateway {
  constructor(private configService: ConfigService) {}

  getClientProxyAuthInstance(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [`${this.configService.get<string>('RABBIT_MQ_URL')}`],
        queue: this.configService.get<string>('RABBIT_MQ_TOPIC_AUTH'),
        noAck: false,
        queueOptions: {
          durable: false,
        },
      },
    });
  }
}
