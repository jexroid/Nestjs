import { Module } from "@nestjs/common";

import { InvoiceModule } from "./invoice/invoice.module";
import { CustomerModule } from "./customer/customer.module";

@Module({
  imports: [InvoiceModule, CustomerModule],
})
export class V1Module {}
