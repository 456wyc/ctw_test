/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { ClientCreateDTO, ClientListQueryDTO } from './clients.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async getClients(query: ClientListQueryDTO) {
    return await this.prisma.client.findMany();
  }

  async getClient(id: string) {
    return await this.prisma.client.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createClient(client: ClientCreateDTO) {
    let clientId: string = 'randomString'; //todo
    let clientSecret: string = 'randomString'; //todo
    // todo
    return await this.prisma.client.create({
      data: {
        ...client,
        clientId,
        clientSecret,
      },
    });
  }
}
