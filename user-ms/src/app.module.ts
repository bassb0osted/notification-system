import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import databaseConfig from './config/database.config';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.example.local'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
