import { CreatePostDto } from './dto/create-post.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Post as PostData } from './Entity/post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

  constructor(private postService: PostService) {}

  @Get()
  showAllPost(): Promise<PostData[]> {
    return this.postService.allPost()
  }

  @Post()
  store(@Body() requestData: CreatePostDto): Promise<PostData> {
    return this.postService.storeData(requestData)
  }

}
