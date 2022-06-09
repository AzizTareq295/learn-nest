import { Controller, Get, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.testOne();
  }

  @Post()
  create(@Req() request: Request): object {
    return {
      request: request.body
    };
  }
  
  @Get('test')
  @Redirect('https://nestjs.com', 301)
  getTest(): string {
    return this.appService.getHello();
  }
}
