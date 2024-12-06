/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PagingQueryDTO } from 'src/common/common.dto';
import { PrismaService } from 'src/database/database.service';
import { GroupListQueryDTO } from './groups.dto';

@Injectable()
export class GroupsService {
  private readonly logger = new Logger(GroupsService.name);
  constructor(private prisma: PrismaService) {}

  async getGroups(query: GroupListQueryDTO) {
    this.logger.log('getGroups');
    return await this.prisma.group.findMany();
  }
}
