import { Module } from "@nestjs/common";

import { InvoiceModule } from "./invoice/invoice.module";
import { ItemsModule } from './items/items.module';
import { CustomerModule } from "./customer/customer.module";
import { AuthModule } from "./auth/auth.module";
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [InvoiceModule, CustomerModule, ItemsModule, AuthModule, DriverModule],
})
export class V1Module {}
