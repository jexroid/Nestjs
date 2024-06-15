import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientDto } from '../client/dto/create-client.dto';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config()

describe('AuthService', () => {
  
  beforeEach(async () => {
    await Test.createTestingModule({
    }).compile();


  });

  it('jwt token validation (token is valid)', async () => {

    expect(await service.IsTokenValidOrExpierd(`${jwt}`)).toStrictEqual({ valid: true, details });
  });

  it('jwt token validation (token isNOT valid)', async () => {


    expect(await service.IsTokenValidOrExpierd(`${jwt}`)).toStrictEqual({ valid: false, error: 'Invalid signature' });
  });

});
