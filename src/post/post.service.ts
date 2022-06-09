import { CreatePostDto } from './dto/create-post.dto';
import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post as UserPost } from './Entity/post.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(UserPost) private postRepository: Repository<UserPost>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async allPost(): Promise<UserPost[]> {
    return await this.postRepository.find()
  }

  async storeData(requestData: CreatePostDto): Promise<UserPost> {

    const userData = await this.userRepository.findOneBy({id: Number(requestData.user_id)})

    return await this.postRepository.save({
      title: requestData.title,
      slug: requestData.slug,
      content: requestData.content,
      userId: 1,
    })
    
  }


}
