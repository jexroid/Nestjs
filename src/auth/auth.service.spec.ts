import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateClientDto } from '../client/dto/create-client.dto';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config()

describe('AuthService', () => {
  let service: AuthService;
  let jwt = null
  const dto: CreateClientDto = {
    uuid: 12345678,
    email: 'kigiretro@gmail.com',
    firstname: 'amirreza',
    lastname: 'farzan',
    phoneNumber: "+989171111111",
    username: 'jexroid',
    password: "amirsalam",
    profileImagePath: '/'
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: `${process.env.JWT_SECRET_CLIENT}`,
          signOptions: { expiresIn: "10d" },
        })],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);

  });

  it('jwt token validation (token is valid)', async () => {
    jwt = await service.JWT_Generator(dto)

    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = currentTime + (10 * 24 * 60 * 60); // assuming token expires in 10 days

    const details = {
      exp: expirationTime,
      iat: currentTime,
      sub: {
        sub: 12345678,
        firstname: 'amirreza',
        lastname: 'farzan',
        username: 'jexroid',
      },
    };

    expect(await service.IsTokenValidOrExpierd(`${jwt}`)).toStrictEqual({ valid: true, details });
  });

  it('jwt token validation (token isNOT valid)', async () => {
    jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpleHJvaWQiLCJzdWIiOnsiZW1haWwiOiJraWdpcmV0cm9AZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiYW1pcnJlemEiLCJsYXN0bmFtZSI6ImZhcnphbiIsInByb2ZpbGUiOiIvIn0sImlhdCI6MTcwMzM1NDc4MCwiZXhwIjoxNzA0MjE4NzgwfQ.l7ZPoIPwn6YB-dvQoevqXh6wTt0peUotpgfn6jeQsVp'


    expect(await service.IsTokenValidOrExpierd(`${jwt}`)).toStrictEqual({ valid: false, error: 'Invalid signature' });
  });

});
