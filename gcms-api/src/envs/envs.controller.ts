/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EnvsService } from './envs.service';
import { EnvCreateDTO, EnvListQueryDTO, EnvUpdateDTO } from './envs.dto';

@ApiTags('envs')
@Controller('envs')
export class EnvsController {
  private readonly logger = new Logger(EnvsController.name);
  constructor(private envService: EnvsService) {}

  @Get()
  getEnvs(@Req() req, @Query() query: EnvListQueryDTO) {
    return this.envService.getEnvs(query);
  }

  @Post()
  createEnv(@Req() req, @Body() body: EnvCreateDTO) {
    return this.envService.createEnv(body);
  }

  @Get(':id')
  getEnv(@Param('id') id: string) {
    return this.envService.getEnvById(id);
  }

  @Put(':id')
  updateEnv(@Param('id') id: string, @Body() body: EnvUpdateDTO) {
    return this.envService.updateEnv(id, body);
  }

  @Delete(':id')
  deleteEnv(@Param('id') id: string) {
    return this.envService.deleteEnv(id);
  }
}
