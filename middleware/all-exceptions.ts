import axios from 'axios';
import { ArgumentsHost , Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter{
  async catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
    await this.notifyError(exception);
  }


  async notifyError(exception: unknown) {
    const errorMessage = exception instanceof Error ? exception.message : 'An unknown error occurred';
    console.error('Exception caught by AllExceptionsFilter:', errorMessage);
    const chatId = process.env.TELEGRAMBOT_CHATID;
    const botToken = process.env.TELEGRAMBOT_TOKEN;
    const message = `خطایی از سمت تیم ${process.env.NODE_ENV} رخ داد: ${encodeURI(errorMessage)}`;

    try {
      const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
      await axios.post(
        "https://www.httpdebugger.com/tools/ViewHttpHeaders.aspx",
        {
          UrlBox: telegramApi,
          AgentList: "Mozilla Firefox",
          VersionList: "HTTP/1.1",
          MethodList: "GET",
        }
      ).then((resp) => {
        if (resp.status == 200) {
          return true
        } else {
          throw new Error('OMG, TELEGRAM IS NOT WORKING')
        }
      })
    } catch (error) {
      console.error("Error sending message to Telegram", error);
      throw new Error('OMG, TELEGRAM IS NOT WORKING')
    }    
  }

}