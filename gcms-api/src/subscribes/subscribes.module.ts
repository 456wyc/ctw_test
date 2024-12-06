import { ConfigsService } from 'src/configs/configs.service';
import { SubscribesController } from './subscribes.controller';
import { SubscribesService } from './subscribes.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigsModule } from 'src/configs/configs.module';

@Module({
  imports: [ConfigsModule],
  controllers: [SubscribesController],
  providers: [SubscribesService],
})
export class SubscribesModule {}
