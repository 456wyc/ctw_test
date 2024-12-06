import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ConfigsController],
  providers: [
        ConfigsService, ],
})
export class ConfigsModule {}
