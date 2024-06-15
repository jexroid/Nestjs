import { Injectable } from "@nestjs/common";
import { JsonWebTokenError, JwtService } from "@nestjs/jwt";
import { CreateClientDto } from "../client/dto/create-client.dto";
// import { ClientService } from "../client/client.service";
import { PayloadClientInterface } from "interface/payload.interface";
// import * as bcrypt from "bcrypt";


@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    // private Cservice: ClientService
  ) { }


  generateTimeBasedId(): number {
      const now = new Date().getTime();
      const timeString = now.toString();
      const timeComponent = timeString.substr(-4);
      const randomComponent = Math.floor(1000 + Math.random() * 9000);
      const resault = timeComponent + randomComponent;
      return Number(resault)
  }

  // this will create user and save it in DB without JWT info
  JWT_Generator(createuserdto: CreateClientDto, custom_uuid: number) {
    const payload: PayloadClientInterface = {
      sub: {
        uuid: custom_uuid,
        firstname: createuserdto.firstname,
        lastname: createuserdto.lastname,
        profile: createuserdto.profileImagePath
      },
    };

    const accessToken = this.jwt.sign(payload); // Ensure this operation is synchronous
    return accessToken;
  }

  // async validation(username: string, password: string) {
  //   const user = await this.Cservice.getUserByUsername(username);
  //   console.log(user)
  //   const cryptedpass = await bcrypt.compare(password, user.password);
  //   console.log(cryptedpass)
  //   if (user && cryptedpass) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { password, ...resault } = user;
  //     return resault;
  //   } else {
  //     return null;
  //   }
  // }

  IsTokenValidOrExpierd(token: string) {

    try {
      const details = this.jwt.verify(token);
      return { valid: true, details };
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return { valid: false, error: 'Invalid signature' };
      } else {
        throw new Error(error)
        // TODO:SMS TO ME FOR THIS ERROR
      }
    }
  }
}
