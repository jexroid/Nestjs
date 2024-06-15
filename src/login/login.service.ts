import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LoginService {

    async validation_OTP() {
        const flotinumber = Math.random() * 100000
        const tokenOTP = Math.floor(flotinumber)

        const apiUrl = 'https://portal.amootsms.com/rest/SendQuickOTP';
        const token = '3A2151AD23E6AF65E8D355E8C4FCE7ABD6A10C09';
        const mobileNumber = '9174330422';
        const codeLength = '5';
        const optionalCode = tokenOTP

        const url = `${apiUrl}?Token=${encodeURIComponent(token)}&Mobile=${mobileNumber}&CodeLength=${codeLength}&OptionalCode=${optionalCode}`;

        axios.get(url)
            .then(response => {
                console.log(response.data);
                // If you want to parse JSON and access specific properties, you can uncomment the following lines:
                // const result = response.data;
                // console.log(result.Status);
            })
            .catch(error => {
                console.error(error);
            });

    }
}
