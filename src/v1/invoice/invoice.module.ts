import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [],
  controllers: [InvoiceController],
  providers: [InvoiceService, PrismaService],
})
export class InvoiceModule {}
