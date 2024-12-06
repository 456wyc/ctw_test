/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientCreateDTO, ClientUpdateDTO } from './clients.dto';

@Controller('clients')
export class ClientsController {
  constructor() {}

  @Get()
  getClients() {
    return 'This action returns all clients';
  }

  @Get(':id')
  getClient(@Param('id') id: string) {
    return `This action returns a #${id} client`;
  }

  @Post()
  createClient(@Body() createClientDto: ClientCreateDTO) {
    return 'This action adds a new client';
  }

  @Put(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: ClientUpdateDTO,
  ) {
    return `This action updates a #${id} client`;
  }
}
