import { Injectable } from "@nestjs/common";

import CRUDService from "../utils/crud/crud.service";

import { CreateInvoiceDto } from "./dto/create-invoice.dto";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class InvoiceService extends CRUDService {
  constructor(protected readonly prisma: PrismaService) {
    super();
  }

  async create(createInvoiceDto: CreateInvoiceDto) {
    const a = new PrismaClient();
    a.items;
    return "This action adds a new invoice";
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
