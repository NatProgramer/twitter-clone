import { HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';
import { User } from 'src/types/users.types';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<User[]>;
    createUser(userInfo: UserDto): HttpException;
}
