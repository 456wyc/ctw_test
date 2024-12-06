import { ConfigsService } from 'src/configs/configs.service';
import { SubscribesController } from './subscribes.controller';
import { SubscribesService } from './subscribes.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigsService],
  controllers: [SubscribesController],
  providers: [SubscribesService],
})
export class SubscribesModule {}
