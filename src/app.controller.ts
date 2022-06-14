import { Controller, Get, Post, Redirect, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
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

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './upload/profile-image',
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      }
    })
    
  }))
  uploadFile(@UploadedFile() file:Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    }

    return response;
  }
  
  @Get('test')
  @Redirect('https://nestjs.com', 301)
  getTest(): string {
    return this.appService.getHello();
  }
}
