import { Module, ValidationPipe } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientModule } from "./client/client.module";
import { APP_PIPE } from "@nestjs/core";
import { LawyerModule } from './lawyer/lawyer.module';
import { RegisterController } from './register.controller';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { AuthModule } from './auth/auth.module';
import { SmsService } from './auth/sms.service';
import { JwtStrategy } from "./client/auth/strategies/jwt.strategie";
import { ApiModule } from './api/api.module';
import { PrismaService } from './prisma.service';


@Module({
  imports: [
    ClientModule,
    LawyerModule,
    AuthModule,
    ApiModule,
  ],
  controllers: [AppController, LoginController, RegisterController],
  providers: [
    AppService,
    JwtStrategy,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    LoginService,
    SmsService,
    PrismaService,
  ],
})
export class AppModule {}
