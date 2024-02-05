import { HttpStatus } from '@nestjs/common';
import { Post } from 'src/types/posts.types';
import { ConfigService } from '@nestjs/config';
export declare class PostsService {
    private readonly configService;
    constructor(configService: ConfigService);
    getPosts(): Promise<Post[]>;
    createPost(content: string, userId: string): Promise<HttpStatus>;
}
