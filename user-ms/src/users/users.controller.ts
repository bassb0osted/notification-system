import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  @HttpCode(201)
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }
}
