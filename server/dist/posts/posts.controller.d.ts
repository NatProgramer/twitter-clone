import { PostsService } from './posts.service';
import { type Post as PostType } from 'src/types/posts.types';
import { HttpException } from '@nestjs/common';
import { PostDto } from 'src/dto/post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<PostType[]>;
    createPost(post: PostDto): Promise<HttpException>;
}
