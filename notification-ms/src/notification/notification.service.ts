import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

import { CreateUserDto } from './dto/create-user.dto';
import { USER_NOTIFICATION } from '../constants/queues';

@Injectable()
export class NotificationService {
  constructor(
    @InjectQueue(USER_NOTIFICATION.QUEUE_NAME) private queue: Queue,
  ) {}

  public async newUserNotification(user: CreateUserDto) {
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24h
    await this.queue.add(
      USER_NOTIFICATION.PROCESSES.USER_CREATED_NOTIFICATION,
      user,
      {
        delay: twentyFourHours,
      },
    );
  }
}
