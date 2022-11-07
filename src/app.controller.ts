import { Controller, Get, Post } from '@nestjs/common';
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

  @Post('/signup')
  signup(): string {
    return this.appService.signup();
  }

  @Post('/signin')
  signin(): string {
    return this.appService.signin();
  }

  @Get('/forgot')
  forgot(): string {
    return this.appService.forgot();
  }

  @Get('/tokenUpdate')
  tokenUpdate(): string {
    return this.appService.tokenUpdate();
  }
}
