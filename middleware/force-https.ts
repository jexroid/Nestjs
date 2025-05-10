import { HttpStatus } from "@nestjs/common";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class HttpsRedirectMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (!req.secure) {
      res.redirect(HttpStatus.PERMANENT_REDIRECT, `https://${req.hostname}${req.originalUrl}`);
    }

    next();
  }
}
