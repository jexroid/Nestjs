import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";

import { InvoiceService } from "./invoice.service";
import { CreateInvoiceDto } from "./dto/create-invoice.dto";

@Controller("invoice")
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post("create")
  async create(@Body() invoice: CreateInvoiceDto) {
    const id = await this.invoiceService.create(invoice)
    return {
      success: true,
      result: {id},
      message: "all documents saved Successfully",
    };
  }

  @Get("read/:id")
  async read(@Param('id') id: number) {
    return await this.invoiceService._read(id)
  }

  @Patch("update")
  async update() {}

  @Delete("delete")
  async delete() {}

  @Get("search")
  async search(@Query("fields") fields: string, @Query("q") q: string) {
    return await this.invoiceService.search({fields, q})
  }

  @Get("list")
  async list(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.invoiceService.list({ page, order, sort, items });
  }

  @Get("listAll")
  async listAll(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.invoiceService.list({ page, order, sort, items });
  }

  @Get("filter")
  async filter() {}

  @Get("summery")
  async summery() {
    const result = await this.invoiceService.summery()
    return {
      success: true,
      result,
      message: "Successfully found all documents",
    };
  }
}
