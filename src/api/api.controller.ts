import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiService } from './api.service';
import { JwtAuthGuard } from 'src/client/auth/guards/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService, private readonly auth:AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('valid')
  create() {
    return 'salam';
  }
}
