import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, TimeoutError, catchError, timeout } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(3000),
      catchError((error) => {
        if (error instanceof TimeoutError) {
          // return throwError(() => new RequestTimeoutException());
          throw new RequestTimeoutException();
        }
        // return throwError(() => error);
        throw error;
      }),
    );
  }
}
