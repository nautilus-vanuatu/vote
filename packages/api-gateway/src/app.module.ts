import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProxyRMQModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
