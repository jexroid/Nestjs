import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateClientDto } from "./dto/create-client.dto";
import { PrismaService } from '../prisma.service';
import { AuthService } from "src/auth/auth.service";
import * as bcrypt from "bcrypt";

// amirreza, biya code hamon ro laye libery haye js bezarim... (security)
// in comment ro pak kon.

@Injectable()
export class ClientService {
  constructor(
    private repo: PrismaService,
    private readonly auth: AuthService,
  ) { }


  async getAllUser(): Promise<unknown> {
    const allData = await this.repo.users.findMany();
    if (!allData || allData.length == 0) {
      throw new NotFoundException(
        "seems like no user even registerd, nothing FOUNDED"
      );
    }

    return allData;
  }

  async getUserByPhone(UserPhone: string) {
    const existingPhoneNumber = await this.repo.users.findUnique({
      where: {
        phone: UserPhone
      }
    })

    if (!existingPhoneNumber) {
      return null;
    } else {
      return existingPhoneNumber;
    }
  }

  async getUserByEmail(UserEmail: string) {
    const existingUser = await this.repo.users.findUnique({
      where: {
        email: UserEmail
      }
    })

    if (!existingUser) {
      return null;
    }
    return existingUser;
  }

  async savingData2DB(clientData: CreateClientDto, custom_uuid: number) {
    try {
      const Password_hash = await bcrypt.hash(clientData.password, 7);
      const dto = {
        uuid: custom_uuid,
        firstname: clientData.firstname,
        lastname: clientData.lastname,
        email: clientData.email,
        province: clientData.province,
        city: clientData.city,
        phone: clientData.phoneNumber,
        password: Password_hash
      }
      await this.repo.users.create({
        data: dto
      });

      return true
    }
    catch (e) {
      // sms the error
      return false
    }

  }
}
