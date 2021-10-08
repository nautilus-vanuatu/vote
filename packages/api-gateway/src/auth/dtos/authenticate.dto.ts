import { IsString } from 'class-validator';

export class AuthenticateDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
