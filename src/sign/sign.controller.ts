import { SignService } from './sign.service';
import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

@Controller('sign')
export class SignController {
  constructor(private readonly signService: SignService) {}

  @Post()
  in() {}

  @Post()
  up() {}

  @Post()
  lost() {}

  @Get(':id')
  out(@Param('id', ParseIntPipe) id: number) {}
}
