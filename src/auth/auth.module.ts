import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
import * as dotenv from 'dotenv';
import { SmsService } from './sms.service'
import { PrismaService } from 'src/prisma.service';
dotenv.config()

@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_CLIENT}`,
      signOptions: { expiresIn: "1d" },
    })],
  providers: [AuthService, ClientService, SmsService, PrismaService],
  exports: [AuthService, SmsService, PrismaService]
})
export class AuthModule {}
