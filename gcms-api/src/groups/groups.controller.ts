/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GroupsService } from './groups.service';
import { GroupListQueryDTO } from './groups.dto';
import { ConfigListQueryDTO } from 'src/configs/configs.dto';

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Get()
  getGroups(@Query() query: GroupListQueryDTO) {
    return this.groupsService.getGroups(query);
  }

  @Get(':gid/configs')
  getConfigs(@Param('gid') gid: string, @Query() query: ConfigListQueryDTO) {
    return this.groupsService.getConfigs(gid, query);
  }
}
