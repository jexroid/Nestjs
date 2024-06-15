import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateAPIDto {
    @IsNotEmpty()
    @IsString()
    readonly token: string;
}
