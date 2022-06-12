import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

  constructor(private profileService: ProfileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file:Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    }
    console.log(file)

    return response;
  }

}
