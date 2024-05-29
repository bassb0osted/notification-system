import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { CreateUserDto } from '../notification/dto/create-user.dto';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  public async sendUserCreatedNotification(data: CreateUserDto) {
    return this.httpService.post(
      'https://webhook.site/c964a502-c3b0-4792-837a-5313b7d5dce9',
      data,
    );
  }
}
