import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateLawyerDto } from "../dto/create-lawyer.dto";
import { LawyerService } from "../lawyer.service";
import { PayloadLawyerInterface } from "interface/payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private Cservice: LawyerService
  ) {}

  // this will create user and save it in DB without JWT info
  async createUser(dto: CreateLawyerDto): Promise<any> {
    const payload: PayloadLawyerInterface = {
      username: dto.username,
      sub: {
        job_area: dto.job_area,
        firstname: dto.firstname,
        lastname: dto.lastname,
      },
    };

    const accessToken = this.jwt.sign(payload); // Ensure this operation is synchronous
    return accessToken;
  }

  // async validation(username: string, password: string) {
  //   const user = await this.Cservice.getUserByUsername(username);
  //   const cryptedpass = await bcrypt.compare(password, user.password);
  //   if (user && cryptedpass) {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { password, ...resault } = user;
  //     return resault;
  //   } else {
  //     return null;
  //   }
  // }

  async IsTokenValidOrExpierd(token: string) {
    if (token != undefined) {
      try {
        const details = this.jwt.verify(token);
        return details;
      } catch (e) {
        return null;
      }
    } else {
      return null
    }
  }
}
