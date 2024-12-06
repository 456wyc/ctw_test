/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { UserLoginDTO } from './users.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private prisma: PrismaService) {}

  async login(data: UserLoginDTO) {
    const { email, password } = data;
    // todo
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getUser(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
