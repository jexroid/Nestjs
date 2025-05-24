import { Controller, Get, Query } from '@nestjs/common';

import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get("search")
  async search(@Query("fields") fields: string, @Query("q") q: string) {
    return await this.driverService.search({fields, q})
  }
  
  @Get("list")
  async list(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.driverService.list({ page, order, sort, items });
  }
  
  @Get("listAll")
  async listAll(@Query("page") page: number, @Query("order") order?: 'asc' | 'desc', @Query("sort") sort?: string, @Query("items") items?: string) {
    return await this.driverService.list({ page, order, sort, items });
  }
}
