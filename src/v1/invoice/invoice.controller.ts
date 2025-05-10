import { Controller, Delete, Get, Patch, Post, Query } from "@nestjs/common";

import { InvoiceService } from "./invoice.service";

@Controller("invoice")
export class InvoiceController {
  constructor(private readonly service: InvoiceService) {}

  @Post("create")
  async create() {}

  @Get("read/:id")
  async read() {}

  @Patch("update")
  async update() {}

  @Delete("delete")
  async delete() {}

  @Get("search")
  async search(@Query("fileds") fields: string, @Query("q") q: string) {
    return await this.service.search({fields, q})
  }

  @Get("list")
  async list(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.service.list({ page, order, sort, items });
  }

  @Get("listAll")
  async listAll(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.service.list({ page, order, sort, items });
  }

  @Get("filter")
  async filter() {}

  @Get("summery")
  async summery() {}
}
