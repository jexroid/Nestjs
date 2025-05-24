/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Render, UseGuards, Req } from "@nestjs/common";
import { Request } from "express";

@Controller()
export class AppController {

  @Get(".env")
  troll() {
    return {
      MYSQL_PASSWORD: "https://www.youtube.com/watch?v=qbWqXKN3m3c",
      MYSQL_USERNAME: "jexroid --> search this in google",
      IM_A_DUMB_HACKER_TRYING_FINGER_MY_PC_POWER: `ey vay, hack shodam :D`,
    };
  }
}
