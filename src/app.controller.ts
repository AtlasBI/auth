import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  info(): string {
    return this.appService.info();
  }

  @Get('/users')
  users(): string {
    return this.appService.users();
  }

  @Get('/signup')
  signup(): string {
    return this.appService.signup();
  }
}
