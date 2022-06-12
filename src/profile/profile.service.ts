import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileE } from './Entity/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileE) private profileRepository: Repository<ProfileE>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ){}


  async storeData(requestData: CreateProfileDto): Promise<string> {
    return "hi"
  }
}
