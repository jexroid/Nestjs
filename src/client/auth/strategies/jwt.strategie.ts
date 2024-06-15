import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PayloadClientInterface } from 'interface/payload.interface';
import * as dotenv from 'dotenv';
dotenv.config();

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_SECRET_CLIENT}`,
    });
  }

  async validate(payload: PayloadClientInterface) {
    return { user: payload.sub };
  }
}
