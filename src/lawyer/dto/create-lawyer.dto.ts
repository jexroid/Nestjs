import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmail,
  MinLength,
  IsPhoneNumber,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateLawyerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  readonly lastname: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber('IR')
  readonly phoneNumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  readonly password: string;

  @IsNotEmpty()
  @IsArray()
  job_area: Array<string>
}