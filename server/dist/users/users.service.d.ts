import { ConfigService } from '@nestjs/config';
import { User } from 'src/types/users.types';
export declare class UsersService {
    private readonly configService;
    constructor(configService: ConfigService);
    getUsers(): Promise<User[]>;
    createUser(username: string, userPassword: string, userAvatar: string): void;
}
