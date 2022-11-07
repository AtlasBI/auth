import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  info(): string {
    return 'Info';
  }

  users(): string {
    return 'Users';
  }

  signup(): string {
    return 'Signup';
  }

  signin(): string {
    return 'signin';
  }

  forgot(): string {
    return 'forgot';
  }

  tokenUpdate(): string {
    return 'tokenUpdate';
  }
}
