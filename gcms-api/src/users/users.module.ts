import { UsersService } from './users.service';
import { UsersController } from './users.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { todo } from 'node:test';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {
  constructor(private readonly usersService: UsersService) {}

  login() {
    // todo 
  }

}
