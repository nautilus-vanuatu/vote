import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [
    ProxyRMQModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
