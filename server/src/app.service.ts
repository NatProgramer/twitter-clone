import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  default(): {
    pages: string[];
  } {
    return {
      pages: ['/posts', '/users'],
    };
  }
}
