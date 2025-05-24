import { Controller, Get, Query } from "@nestjs/common";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get("search")
  async search(@Query("fileds") fields: string, @Query("q") q: string) {
    return await this.itemsService.search({ fields, q });
  }

  @Get("list")
  async list(
    @Query("page") page: number,
    @Query("order") order?: "asc" | "desc",
    @Query("sort") sort?: string,
    @Query("items") items?: string
  ) {
    return await this.itemsService.list({ page, order, sort, items });
  }

  @Get("listAll")
  async listAll(
    @Query("page") page: number,
    @Query("order") order?: "asc" | "desc",
    @Query("sort") sort?: string,
    @Query("items") items?: string
  ) {
    return await this.itemsService.list({ page, order, sort, items });
  }
}
