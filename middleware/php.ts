import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class XPoweredByMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.setHeader('X-Powered-By', 'PHP v5.3.11');
    next();
  }
}
