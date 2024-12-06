import { EnvsService } from './envs.service';
import { EnvsController } from './envs.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EnvsController],
  providers: [
        EnvsService, ],
})
export class EnvsModule {}
