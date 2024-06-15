// import { Test, TestingModule } from '@nestjs/testing';
// import { ApiController } from './api.controller';
// import { ApiService } from './api.service';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from '../auth/auth.service';
// import { CreateClientDto } from '../client/dto/create-client.dto';
// // Other necessary imports...

// describe('ApiController', () => {
//   let apiController: ApiController;
//   let apiService: ApiService;
//   let auth: AuthService
//   let jwt = null

//   const dto: CreateClientDto = {
//     uuid: null,
//     email:'kigiretro@gmail.com',
//     firstname: 'amirreza',
//     lastname: 'farzan',
//     phoneNumber: "+989171111111",
//     username: 'jexroid',
//     password: "amirsalam",
//     profileImagePath: '/'
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [JwtModule.register({
//         secret: `${process.env.JWT_SECRET_CLIENT}`,
//         signOptions: { expiresIn: "10d" },
//       })],
//       controllers: [ApiController],
//       providers: [ApiService],
//     }).compile();

//     apiController = module.get<ApiController>(ApiController);
//     apiService = module.get<ApiService>(ApiService);
//     // Mock any necessary service methods if required
//   });

//   it('should return true for a valid JWT token', async () => {
//     jwt = await auth.JWT_Generator(dto)
//     const response = await apiController.create({ token: jwt });
//     expect(response).toBeTruthy(); // Or a more specific assertion based on your implementation
//   });

//   it('should return false for an invalid JWT token', async () => {
//     const invalidToken = 'your_invalid_jwt_token';
//     const response = await apiController.create({ token: invalidToken });
//     expect(response).toBeFalsy(); // Or a more specific assertion based on your implementation
//   });

//   // Add more test cases if needed
// });
