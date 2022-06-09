import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testOne(): object {
    return {
      test: 'testOne'
    };
  }
}
