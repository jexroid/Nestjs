import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../../../auth/auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategies extends PassportStrategy(Strategy) {
    constructor(private authservice: AuthService) {
        super()
    }

    async validate(token: string) {
        const user = await this.authservice.IsTokenValidOrExpierd(token)
        if (!user) {
            console.log('yes man')
            throw new UnauthorizedException();
        } else {
            return user
        }
    }
}