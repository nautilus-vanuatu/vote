import { Module } from '@nestjs/common';
import { ClientProxyVote } from './client-proxy';

@Module({
  providers: [ClientProxyVote],
  exports: [ClientProxyVote],
})
export class ProxyRMQModule {}
