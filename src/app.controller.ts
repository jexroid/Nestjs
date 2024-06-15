/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, UseGuards, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
  constructor(private readonly auth: AuthService) { }

  @Get()
  @Render("index")
  async root(@Req() request: Request) {
    const isUserTokenValid = this.auth.IsTokenValidOrExpierd(
      request.cookies.token
    );
    if (isUserTokenValid.valid == true) {
      return {
        title: "وکیل بات",
        data: isUserTokenValid.details,
      };

    } else if (isUserTokenValid.valid == false && isUserTokenValid.error === 'Invalid signature') {
      return { title: "وکیل بات" };
    }
  }

  @Get(".env")
  troll() {
    return {
      MYSQL_PASSWORD: 'https://www.youtube.com/watch?v=qbWqXKN3m3c',
      MYSQL_USERNAME: 'jexroid --> search this in google',
      IM_A_DUMB_HACKER_TRYING_FINGER_MY_PC_POWER: `ey vay, hack shodam :D`,

    }
  }

  @Get('motovation')
  @Render('motovation')
  rend() {
    return { msg: null }
  }

  
  @Get('about')
  @Render('aboutus')
  render() {
    return { msg: null }
  }

  
  @Get('contact')
  @Render('contact')
  end() {
    return { msg: null }
  }

  @Get("register")
  @Render("register")
  login() {
    return { title: "login" };
  }
}
