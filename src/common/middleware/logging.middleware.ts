import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // This calculation will include the interceptors, filters, guards, and method handlers execution time
    console.time('Request-response time');

    res.on('finish', () => console.timeEnd('Request-response time'));
    next();
  }
}
