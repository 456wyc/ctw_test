/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  ClientCreateDTO,
  ClientListQueryDTO,
  ClientUpdateDTO,
} from './clients.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  getClients(@Query() query: ClientListQueryDTO) {
    return this.clientsService.getClients(query);
  }

  @Get(':id')
  getClient(@Param('id') id: string) {
    return  this.clientsService.getClient(id);
  }

  @Post()
  createClient(@Body() createClientDto: ClientCreateDTO) {
    return this.clientsService.createClient(createClientDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: ClientUpdateDTO,
  ) {
    return `This action updates a #${id} client`;
  }
}
