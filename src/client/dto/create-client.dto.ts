import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmail,
  MinLength,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export class CreateClientDto {
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber('IR')
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  readonly password: string;

  @IsOptional()
  @MaxLength(30)
  @IsString()
  readonly city: string;

  @IsOptional()
  @MaxLength(30)
  @IsString()
  readonly province: string;

  @IsOptional()
  @IsString()
  profileImagePath: string;

}
