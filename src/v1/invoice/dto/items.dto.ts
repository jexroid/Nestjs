import { IsNotEmpty, IsInt } from "class-validator"

export class ItemsDto {
  @IsNotEmpty()
  protected readonly itemName: string
  
  @IsNotEmpty()
  @IsInt()
  protected readonly quantity: number
  
  @IsNotEmpty()
  @IsInt()
  protected readonly price: number
  
  @IsNotEmpty()
  @IsInt()
  protected readonly total: number
}