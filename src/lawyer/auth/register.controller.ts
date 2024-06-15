import { Controller, Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Response } from "express";
import { RegisterService } from './register.service';
import { CreateLawyerDto } from '../dto/create-lawyer.dto';

@Controller('register')
export class RegisterController {

    constructor(private readonly service: RegisterService) { }

    @Post('lawyer')
    async registerLawyer(
        @Body() dto: CreateLawyerDto,
        @Res() response: Response,
    ) {
        const isitSaved = await this.service.saveLawyer2DB(dto)
        console.log(isitSaved)

        return response.status(HttpStatus.CREATED).json({
            statusCode: 200,
        });
    }

}
