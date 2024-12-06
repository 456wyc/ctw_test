/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserLoginDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('login')
  login(@Req() req, @Body() body: UserLoginDTO) {
    return this.userService.login(body);
  }
}
