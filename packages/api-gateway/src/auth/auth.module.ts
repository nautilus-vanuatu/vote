import { Module } from '@nestjs/common';
import { ProxyRMQModule } from '../proxyrmq/proxyrmq.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ProxyRMQModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
