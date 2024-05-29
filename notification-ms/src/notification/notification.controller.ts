import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from './dto/create-user.dto';

import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('user_created')
  async handleUserCreated(@Payload() user: CreateUserDto) {
    return await this.notificationService.newUserNotification(user);
  }
}
