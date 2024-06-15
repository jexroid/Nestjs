import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class SmsService {
    async send_one(number: string, message: string) {
        const apiUrl = 'https://api.ghasedak.me/v2/sms/send/simple';
        const apiKey = process.env.GHASEDAK_TOKEN;

        const data = {
            message: message,
            receptor: number,
            linenumber: '10008566'
            // TODO: store this in database for better checking your customers  checkid: '1'
        };

        const config = {
            headers: {
                'cache-control': 'no-cache',
                'apikey': apiKey,
                'content-type': 'application/x-www-form-urlencoded'
            }
        };

        const response = await axios.post(apiUrl, new URLSearchParams(data), config)
          .catch(err => {
            throw new Error(err)
          })
        console.log(response.data)
        return response.data
    }
}
