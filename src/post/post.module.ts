import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Post } from './Entity/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
