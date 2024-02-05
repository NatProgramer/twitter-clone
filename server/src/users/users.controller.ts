import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';
import { User } from 'src/types/users.types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() userInfo: UserDto): HttpException {
    const { name, password, avatar } = userInfo;
    const defaultAvatar =
      'https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg';

    if (!name || !password)
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);

    this.usersService.createUser(
      name,
      password,
      avatar ? avatar : defaultAvatar,
    );

    throw new HttpException('No Content', HttpStatus.NO_CONTENT);
  }
}
