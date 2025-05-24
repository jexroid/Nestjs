import {
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Catch,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception instanceof HttpException) {
      // set httpException res to res
      const status = exception.getStatus();
      return response.status(status).json({
        success: false,
        message: exception,
        statusCode: status,
      });
    }

    // this.notifyError(exception);
    throw exception
    
  }

  async notifyError(exception: unknown) {
    const errorMessage = exception instanceof Error ? exception.message : "An unknown error occurred";
    const chatId = process.env.TELEGRAMBOT_CHATID;
    const botToken = process.env.TELEGRAMBOT_TOKEN;
    const message = `خطایی از سمت تیم ${process.env.NODE_ENV} رخ داد: ${encodeURI(errorMessage)}`;

    try {
      const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
      const telegramResponse = await fetch(telegramApi, {
        method: "GET",
      });

      if (!telegramResponse.ok) {
        throw new Error("OMG, TELEGRAM IS NOT WORKING");
      }
      await fetch("https://www.httpdebugger.com/tools/ViewHttpHeaders.aspx", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          UrlBox: telegramApi,
          AgentList: "Mozilla Firefox",
          VersionList: "HTTP/1.1",
          MethodList: "GET",
        }),
      });
    } catch (error) {
      console.error("Error sending message to Telegram", error);
    }
  }
}
