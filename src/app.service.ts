import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  generateTimeBasedId() {
    const now = new Date().getTime();
    const timeString = now.toString();
    const timeComponent = timeString.substr(-4);
    const randomComponent = Math.floor(1000 + Math.random() * 9000).toString();
    return timeComponent + randomComponent;
}  
}
