/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { GroupCreateDTO, GroupListQueryDTO } from './groups.dto';
import { ConfigListQueryDTO } from 'src/configs/configs.dto';

@Injectable()
export class GroupsService {
  private readonly logger = new Logger(GroupsService.name);
  constructor(private prisma: PrismaService) {}

  async createGroup(data: GroupCreateDTO) {
    this.logger.log('createGroup');
    return await this.prisma.group.create({
      data: data,
    });
  }

  async getGroups(query: GroupListQueryDTO) {
    this.logger.log('getGroups');
    return await this.prisma.group.findMany();
  }

  async getConfigs(groupId: string, query: ConfigListQueryDTO) {
    // todo: add query
    this.logger.log('getConfigs');
    return await this.prisma.config.findMany();
  }
}
