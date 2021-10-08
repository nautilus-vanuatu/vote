import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';

import { ClientProxyGateway } from '../proxyrmq/client-proxy';
import { AuthenticateDto } from './dtos/authenticate.dto';
import { ERR_UNAUTHORIZED } from '../common/constants/messages';
import { MSG_AUTHENTICATE } from '../common/constants/queue';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private clientProxy: ClientProxyGateway) {}

  private clientAuth = this.clientProxy.getClientProxyAuthInstance();

  async onApplicationBootstrap(): Promise<void> {
    await this.clientAuth.connect();
  }

  async authenticate(authenticateDto: AuthenticateDto): Promise<void> {
    this.logger.log(`authenticateDto: ${JSON.stringify(authenticateDto)}`);

    try {
      const user = await this.clientAuth
        .send(MSG_AUTHENTICATE, authenticateDto)
        .toPromise();
      return user;
    } catch (err) {
      throw new UnauthorizedException(ERR_UNAUTHORIZED);
    }
  }
}
