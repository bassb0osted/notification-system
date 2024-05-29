import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { lastValueFrom, map } from 'rxjs';

import { CreateUserDto } from './dto/create-user.dto';
import { USER_NOTIFICATION } from '../constants/queues';
import { ApiService } from '../common/api.service';

@Processor(USER_NOTIFICATION.QUEUE_NAME)
export class NotificationConsumer {
  constructor(private readonly apiService: ApiService) {}

  @Process(USER_NOTIFICATION.PROCESSES.USER_CREATED_NOTIFICATION)
  async notifyUser(job: Job<CreateUserDto>) {
    const observer = await this.apiService.sendUserCreatedNotification({
      username: job.data.username,
    });
    return await lastValueFrom(observer.pipe(map((resp) => resp.data)));
  }
}
