import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const { log } = console;

    log(`Antes...`);
    const now = Date.now();

    return next
      .handle()
      .pipe(tap(() => log(`Depois... ${Date.now() - now}ms`)));
  }
}
