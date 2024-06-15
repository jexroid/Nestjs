import { Controller, Get, Render, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly service: LoginService) { }

    @Get()
    @Render('login')
    root() {
        return { title: 'login' }
    }

    @Post()
    async OTP(
        @Body() dto: number,
        @Res() response: Response) {
            
    }
}
