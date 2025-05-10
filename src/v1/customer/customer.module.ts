import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, PrismaService],
})
export class CustomerModule {}
