import { Injectable } from '@nestjs/common';
import { CreateLawyerDto } from '../dto/create-lawyer.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegisterService {
    constructor(
    private repo: PrismaService,
    private jwt: JwtService
    ) {}

    async saveLawyer2DB(lawyer: CreateLawyerDto) {
        const password_hash = await bcrypt.hash(
            lawyer.password,
            7
          );
        
        const newLawyer = await this.repo.lawyer.create({
            data: {
                firstname: lawyer.firstname,
                lastname: lawyer.lastname,
                email: lawyer.email,
                phone: lawyer.phoneNumber,
                job_area: lawyer.job_area,
                password: password_hash,

                verify: false,
                rank: 0
            }
        })
        console.log(newLawyer)
        return newLawyer
    }

    getTopRankedLawyers() {

        const topLawyers = "salam"
        // .createQueryBuilder("lawyer")
        // .where("lawyer.city = :city", { city: 'Tehran' })
        // .andWhere("lawyer.province = :province", { province: 'Tehran' })
        // .orderBy("lawyer.rank", "DESC")
        // .take(20)
        // .getMany();

        return topLawyers;
    }
}
