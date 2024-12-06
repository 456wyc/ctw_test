import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
