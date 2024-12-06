/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupsService } from './groups.service';
import {
  GroupCreateDTO,
  GroupListQueryDTO,
  GroupUpdateDTO,
} from './groups.dto';
import { ConfigListQueryDTO } from 'src/configs/configs.dto';

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  getGroups(@Query() query: GroupListQueryDTO) {
    return this.groupsService.getGroups(query);
  }

  @Post()
  createGroup(@Body() body: GroupCreateDTO) {
    return this.groupsService.createGroup(body);
  }

  @Get(':gid')
  getGroup(@Param('gid') gid: string) {
    return this.groupsService.getGroup(gid);
  }

  @Put(':gid')
  updateGroup(@Param('gid') gid: string, @Body() body: GroupUpdateDTO) {
    return this.groupsService.updateGroup(gid, body);
  }

  @Get(':gid/configs')
  getConfigs(@Param('gid') gid: string, @Query() query: ConfigListQueryDTO) {
    return this.groupsService.getConfigs(gid, query);
  }
}
