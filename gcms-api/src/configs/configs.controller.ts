/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ConfigCreateDTO, ConfigListQueryDTO } from './configs.dto';
import { ApiOperation } from '@nestjs/swagger';
import { ConfigsService } from './configs.service';

@Controller('configs')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) {}

  @ApiOperation({ summary: 'Get Configs' })
  @Get()
  getConfigs(@Req() req, @Query() query: ConfigListQueryDTO) {
    return this.configsService.getConfigs(query);
  }

  @ApiOperation({ summary: 'Create Config' })
  @Post()
  createConfig(@Req() req, @Body() body: ConfigCreateDTO) {
    return this.configsService.createConfig(body);
  }

  @ApiOperation({ summary: 'Get Config' })
  @Get(':id')
  getConfig() {}

  @ApiOperation({ summary: 'Update Config' })
  @Put(':id')
  updateConfig() {}

  @ApiOperation({ summary: 'Delete Config' })
  @Delete(':id')
  deleteConfig(@Param('id') id: string) {}

  @ApiOperation({ summary: 'Join Group' })
  @Post(':id/group/:groupId')
  joinGroup(@Param('id') id: string, @Param('groupId') groupId: string) {}

  @ApiOperation({ summary: 'Leave Group' })
  @Delete(':id/group/:groupId')
  leaveGroup(@Param('id') id: string, @Param('groupId') groupId: string) {}

  @ApiOperation({ summary: 'Get Config Versions' })
  @Get(':id/versions')
  getVersions(@Param('id') id: string) {}

  @ApiOperation({ summary: 'Create Config Version' })
  @Post(':id/versions')
  createVersion(@Param('id') id: string) {}

  @ApiOperation({ summary: 'Get Config Version' })
  @Get(':id/versions/:versionId')
  getVersion(@Param('id') id: string, @Param('versionId') versionId: string) {}

  @ApiOperation({ summary: 'Update Config Version' })
  @Put(':id/versions/:versionId')
  updateVersion() {}

  @ApiOperation({ summary: 'Publish Config Version' })
  @Post(':id/versions/:versionId/publish')
  publishVersion() {}

  @ApiOperation({ summary: 'Delete Config Version' })
  @Delete(':id/versions/:versionId')
  deleteVersion() {}
}
