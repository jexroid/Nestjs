import { Controller, Get, Render } from '@nestjs/common';

@Controller('register')
export class RegisterController {

    @Get("lawyer")
    @Render('login/lawyer')
    root() {
        return { title: 'login' }
    }

    @Get("client")
    @Render("login/client")
    doot() {
        return { title: "client" };
    }
}
