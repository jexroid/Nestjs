import { join } from "node:path";

import { VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import { HttpsRedirectMiddleware } from "middleware/force-https";

import { HttpExceptionFilter } from "../middleware/all-exceptions";

import { AppModule } from "./app.module";

import type { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy: false,
      xPoweredBy: true,
    })
  );
  
  app.use(cookieParser());
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });
  if (process.env.NODE_ENV === "production")
    app.use(new HttpsRedirectMiddleware().use);

  const config = new DocumentBuilder()
    .setTitle("Connector")
    .setDescription("The Connector API description")
    .setVersion("1.0")
    .addTag("Connector")
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  await app.listen(process.env.PORT);
  console.log(`server started at: http://localhost:${process.env.PORT}`);
}
bootstrap();
