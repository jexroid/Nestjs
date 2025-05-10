import { join } from "node:path";

import { NestExpressApplication } from "@nestjs/platform-express";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import * as cookieParser from "cookie-parser";
import helmet from "helmet";
import { VersioningType } from "@nestjs/common";
import { HttpsRedirectMiddleware } from "middleware/force-https";
import { XPoweredByMiddleware } from "middleware/php";

import { AllExceptionsFilter } from "../middleware/all-exceptions";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.use(
    helmet({
      contentSecurityPolicy: false,
      xPoweredBy: true,
    })
  );
  app.use(cookieParser());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

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
  if (process.env.NODE_ENV === 'production') app.use(new HttpsRedirectMiddleware().use);

  await app.listen(process.env.PORT);
  console.log(`server started at: http://localhost:${process.env.PORT}`);
}
bootstrap();
