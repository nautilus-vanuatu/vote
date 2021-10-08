import { Module } from '@nestjs/common';
import { ClientProxyGateway } from './client-proxy';

@Module({
  providers: [ClientProxyGateway],
  exports: [ClientProxyGateway],
})
export class ProxyRMQModule {}
