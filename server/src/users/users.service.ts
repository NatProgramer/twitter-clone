import { createClient } from '@libsql/client';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { User } from 'src/types/users.types';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  async getUsers(): Promise<User[]> {
    const tursoClient = createClient({
      url: process.env.DATABASE_URL ?? '',
      authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
    });

    const users = await tursoClient.execute('SELECT * FROM Users');

    return users.rows.map((user) => {
      return {
        username: user[0],
        user_password: user[1],
        user_id: user[2],
        user_avatar: user[3],
        createdAt: user[4],
      };
    });
  }

  createUser(username: string, userPassword: string, userAvatar: string) {
    const tursoClient = createClient({
      url: process.env.DATABASE_URL ?? '',
      authToken: process.env.DATABASE_AUTH_TOKEN ?? '',
    });

    const createdUserDate = new Date().getTime();

    tursoClient.execute({
      sql: 'INSERT INTO Users VALUES (?, ?, ?, ?, ?)',
      args: [username, userPassword, randomUUID(), userAvatar, createdUserDate],
    });
  }
}
