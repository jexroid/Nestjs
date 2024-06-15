import { Module } from '@nestjs/common';
import { LawyerService } from './lawyer.service';
import { LawyerController } from './lawyer.controller';
import { RegisterController } from './auth/register.controller';
import { RegisterService } from './auth/register.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { PrismaService } from 'src/prisma.service';
dotenv.config()

@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_LAWYER}`,
      signOptions: { expiresIn: "7d" },
    }),
  ],
  controllers: [LawyerController, RegisterController],
  providers: [LawyerService, RegisterService, PrismaService],
})
export class LawyerModule {}
