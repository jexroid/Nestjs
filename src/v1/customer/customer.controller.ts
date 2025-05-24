import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";

import { CustomerService } from "./customer.service";

@Controller("customer")
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  @Post("create")
  async create() {}

  @Get("read")
  async red() {
    return 'await this.CustomerService.read(id);'
  }

  @Get("read/:id")
  async read(@Param("id") id: number) {
    return await this.CustomerService.read(id);
  }

  @Patch("update")
  async update() {}

  @Delete("delete")
  async delete() {}

  @Get("search")
  async search(@Query("fields") fields: string, @Query("q") q: string) {
    return await this.CustomerService.search({ fields, q });
  }

  @Get("list")
  async list(
    @Query("page") page: number,
    @Query("order") order?: "asc" | "desc",
    @Query("sort") sort?: string,
    @Query("items") items?: string
  ) {
    return await this.CustomerService.list({ page, order, sort, items });
  }

  @Get("listAll")
  async listAll(
    @Query("page") page: number,
    @Query("order") order?: "asc" | "desc",
    @Query("sort") sort?: string,
    @Query("items") items?: string
  ) {
    return await this.CustomerService.list({ page, order, sort, items });
  }

  @Get("filter")
  async filter() {}

  @Get("summary")
  async summary() {
    const result = await this.CustomerService.summary();
    return {
      success: true,
      result,
      message: "Successfully found all documents",
    };
    
  }
}
