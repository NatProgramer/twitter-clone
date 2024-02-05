import { PostsService } from './posts.service';
import { type Post as PostType } from 'src/types/posts.types';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PostDto } from 'src/dto/post.dto';

@Controller('/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Promise<PostType[]> {
    return this.postsService.getPosts();
  }

  @Post()
  async createPost(@Body() post: PostDto): Promise<HttpException> {
    const { content, userId } = post;

    if (!userId || !content)
      throw new HttpException('Bar Request', HttpStatus.BAD_REQUEST);

    const userIdRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    if (!userIdRegex.test(userId))
      throw new HttpException('Incorrect user id', HttpStatus.BAD_REQUEST);

    await this.postsService.createPost(content, userId);

    throw new HttpException('No content', HttpStatus.NO_CONTENT);
  }
}
