import { PartialType } from '@nestjs/mapped-types';
import { CreateAPIDto } from './create-api.dto';

export class UpdateAPIDto extends PartialType(CreateAPIDto) {}
