import { Module, ValidationPipe } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";

import { AppController } from "./app.controller";
import { V1Module } from "./v1/v1.module";
import { AuthModule } from "@/auth/auth.module";
import { DrizzleService } from "@/lib/database/database.service";
// import { V1Module } from "./v1/v1.module";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 60,
        },
      ],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    V1Module,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    DrizzleService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
