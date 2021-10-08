import { Body, Controller, Logger, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dtos/authenticate.dto';

@Controller('api/v1/auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Post('authenticate')
  async authenticate(@Body() authenticateDto: AuthenticateDto): Promise<any> {
    this.logger.log(`body: ${JSON.stringify(authenticateDto)}`);

    const user = await this.authService.authenticate(authenticateDto);
    return user;
  }
}
