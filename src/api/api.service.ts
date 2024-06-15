import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ApiService {
  constructor(
  private jwt: AuthService) {}

  JWT_Validation(token: string) {
    const valid = this.jwt.IsTokenValidOrExpierd(token)
    if (valid.valid) {
      return valid.details
    } else {
      return false
    }
  }
}
