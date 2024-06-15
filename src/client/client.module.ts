import { Module } from "@nestjs/common";
import { ClientService } from "./client.service";
import { ClientController } from "./client.controller";
import { LocalStrategies } from "./auth/strategies/local-strategies";
import { RegisterController } from './auth/auth.controller';
import { SmsService } from "src/auth/sms.service";
import * as dotenv from "dotenv";
import { PrismaService } from "src/prisma.service";
import { AuthModule } from "src/auth/auth.module";
dotenv.config();

@Module({
  imports: [
    AuthModule
  ],
  controllers: [ClientController, RegisterController],
  providers: [ClientService, LocalStrategies, SmsService, PrismaService],
  exports: [ClientService],
})
export class ClientModule {}
