import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from 'error/all-exceptions.filter';
import { UnauthorizedExceptionFilter } from 'error/unauthorized-exception.filter';
import { XPoweredByMiddleware } from 'error/php.middleware';
import helmet from 'helmet';
import { NotFoundExceptionFilter } from 'error/404-notfound.exception';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  
  // TODO: کد qr برای لاگ رزومه ای وکیل ها

  // TODO: ایکون ها یکی از بدج ها باید یک دکمه باشه که توضیحات داشته باشه
  // TODO: ایکون های ما باید یه بخش توضیحات داشته باشن همون علامت دلار و شخص به جاش دکمه بزار

  // TODO: یه دکمه پشتیبانی در قسمت پایین

  // TODO: نوشتن حقوق شما محفوط است

  app.use(
    helmet({
      contentSecurityPolicy: false,
      xPoweredBy: true
    })
  );
  app.use(cookieParser());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalFilters(new UnauthorizedExceptionFilter());
  app.useGlobalFilters(new NotFoundExceptionFilter());
  app.use(new XPoweredByMiddleware().use);
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT);
  console.log(`server started at: http://localhost:${process.env.PORT}`);
}
bootstrap();
