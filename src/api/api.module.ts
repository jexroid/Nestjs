import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/client/auth/strategies/jwt.strategie';

@Module({
  imports: [
    AuthModule
  ],
  controllers: [ApiController],
  providers: [ApiService, JwtStrategy],
})
export class ApiModule { }
