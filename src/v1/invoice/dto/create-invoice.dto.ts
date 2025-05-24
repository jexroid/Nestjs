import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, Max, Min, ValidateNested } from "class-validator";

import { ItemsDto } from "./items.dto";

enum status {
  draft = 'draft',
  pending = 'pending',
  sent = 'sent'
}

export class CreateInvoiceDto {
  @IsNotEmpty()
  address: string
  
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  customer: number

  @IsDateString()
  @IsNotEmpty()
  date: string

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  driver: number

  @IsDateString()
  @IsNotEmpty()
  expiredDate: string

  @IsNotEmpty()
  @IsEnum(status)
  status: status

  @IsBoolean()
  @IsNotEmpty()
  taxDiscount: boolean

  @IsOptional()
  @IsInt()
  @Max(999999999999)
  @Min(1)
  @Type(() => Number)
  trnnumber: number

  @IsBoolean()
  @IsNotEmpty()
  usevat: boolean

  @IsNotEmpty()
  workshop: string

  @IsArray()
  @ValidateNested()
  @Type(() => ItemsDto)
  items: ItemsDto[]
}

