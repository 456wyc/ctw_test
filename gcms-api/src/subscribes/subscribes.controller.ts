/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { ConfigsService } from 'src/configs/configs.service';

@Controller('sub')
export class SubscribesController {
  constructor(configsService: ConfigsService) {}

  @Get('evn/:envName/config/:id')
  getConfig() {
    //
  }
}
