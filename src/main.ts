import { join } from "node:path";

import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { HttpsRedirectMiddleware } from "middleware/force-https";
import { XPoweredByMiddleware } from "middleware/php";

import { HttpExceptionFilter } from "../middleware/all-exceptions";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy: false,
      xPoweredBy: true,
    })
  );
  app.use(cookieParser());

  // ? global 
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  app.use(new XPoweredByMiddleware().use);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.enableCors({
    origin: ["http://localhost:4000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies and credentials
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });
  if (process.env.NODE_ENV === "production")
    app.use(new HttpsRedirectMiddleware().use);

  const config = new DocumentBuilder()
    .setTitle("CRM ")
    .setDescription("The CRM API description")
    .setVersion("1.0")
    .addTag("crm")
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  await app.listen(process.env.PORT);
  console.log(`server started at: http://localhost:${process.env.PORT}`);
}
bootstrap();
