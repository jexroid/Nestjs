import {
    Body,
    Controller,
    HttpStatus,
    Res,
    Post,
    UploadedFile,
    UseInterceptors,
    Get,
  } from "@nestjs/common";
  import { Express } from 'express';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ClientService } from "../client.service";
  import { CreateClientDto } from "../dto/create-client.dto";
  import { Response } from "express";
  import { AuthService } from "../../auth/auth.service";
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { SmsService } from "src/auth/sms.service";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { CreateLawyerDto } from "src/lawyer/dto/create-lawyer.dto";

  
@Controller('auth')
export class RegisterController {
    constructor(
        private readonly service: ClientService,
        private readonly auth: AuthService,
        private readonly sms: SmsService
      ) { }

      
    
      @Get("logout")
      logout(@Res() response: Response) {
        response.clearCookie('token');
        return response.redirect('/')
      }

      @Post("client")
      @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads/profileimages', // directory where files will be saved
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            callback(null, `${uniqueSuffix}${extname(file.originalname)}`);
          },
        }),
      }))
      async createUser(
        @Res() response: Response,
        @Body() dto: CreateClientDto,
        @UploadedFile() file: Express.Multer.File
      ) {
        const userexistance = await this.checkUserExistence(dto)
        if (userexistance) {
          return response.status(HttpStatus.BAD_REQUEST).json(userexistance);
        } 

        const custom_uuid = this.auth.generateTimeBasedId()
        dto.profileImagePath = this.profile(file);
        await this.service.savingData2DB(dto, custom_uuid);
        const newuser = await this.auth.JWT_Generator(dto, custom_uuid);
        response.cookie('token', newuser, {
          domain: '.vakilbot.app',
          path: '/',
          httpOnly: true,
          secure: process.env.PRODUCTION === 'production'
        });
        return response.status(HttpStatus.CREATED).json({
          message: "user created successfuly !",
          userInfo: newuser,
          statusCode: HttpStatus.CREATED,
        });
      }

      private async checkUserExistence(dto: CreateClientDto) {
        if (await this.service.getUserByPhone(dto.phoneNumber)) {
          return {message: "user with this phonenumber exist", statusCode: 499}
          }

          if (await this.service.getUserByEmail(dto.email)) {
            return {message: "user with this email exist", statusCode: 498}
          }

          return null
      }

      private profile(profile_image: Express.Multer.File) {

        if (profile_image) {
          return `uploads/profileimages/${profile_image.filename}`
        } else {
          return `uploads/profileimages/unkown.svg`
        }
      }
      
    
      // @Post("lawyer")
      // async createLawyer(
      //   @Res() response: Response,
      //   @Body() dto: CreateLawyerDto
      // ) {
    
      // }
      // @Put("/:id")
      // async updateuser(
      //   @Res() response: Response,
      //   @Param("id") userid: string,
      //   @Body() updateuserdto: UpdateClientDto
      // ) {
      //   try {
      //     const userexistance = await this.service.updateUser(
      //       userid,
      //       updateuserdto
      //     );
      //     return response.status(HttpStatus.OK).json({
      //       message: "welldone jexroid, i updated the user",
      //       user: userexistance,
      //     });
      //   } catch (err) {
      //     response.status(HttpStatus.BAD_GATEWAY).json({
      //       message: "something went wrong body",
      //       error: err,
      //       statusCode: 500,
      //     });
      //   }
      // }

      // TODO: save when user created account or signed in again
}
