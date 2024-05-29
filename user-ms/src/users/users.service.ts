import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('RMQ_USER_SERVICE') private rabbitClient: ClientProxy,
    @InjectRepository(User)
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(user: CreateUserDto) {
    await this.usersRepository.save(user);
    this.rabbitClient.emit('user_created', user);
  }
}
