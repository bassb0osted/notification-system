import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from '@nestjs/axios';

import { USER_NOTIFICATION } from '../constants/queues';
import { ApiService } from '../common/api.service';

import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NotificationConsumer } from './notification.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: USER_NOTIFICATION.QUEUE_NAME,
    }),
    HttpModule,
  ],
  controllers: [NotificationController],
  providers: [ApiService, NotificationService, NotificationConsumer],
})
export class NotificationModule {}
