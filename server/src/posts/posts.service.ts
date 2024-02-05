import { HttpStatus, Injectable } from '@nestjs/common';
import { createClient } from '@libsql/client';
import { Post } from 'src/types/posts.types';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';

@Injectable()
export class PostsService {
  constructor(private readonly configService: ConfigService) {}

  async getPosts(): Promise<Post[]> {
    const tursoClient = createClient({
      url: process.env.DATABASE_URL ?? '',
      authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
    });

    const posts = await tursoClient.execute('SELECT * FROM Posts');

    return posts.rows.map((post: any) => {
      return {
        mainText: post[0],
        id: post[1],
        userId: post[2],
        createdAt: post[3],
        updatedAt: post[4],
      };
    });
  }

  async createPost(content: string, userId: string) {
    const tursoClient = createClient({
      url: process.env.DATABASE_URL ?? '',
      authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
    });

    const createdDate = new Date().getTime();

    tursoClient.execute({
      sql: `INSERT INTO Posts VALUES (?, ?, ?, ?, ?)`,
      args: [content, randomUUID(), userId, createdDate, 0],
    });

    return HttpStatus.OK;
  }
}
