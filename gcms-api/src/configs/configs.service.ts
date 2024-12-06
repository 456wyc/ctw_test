/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { ConfigCreateDTO, ConfigListQueryDTO } from './configs.dto';

@Injectable()
export class ConfigsService {
  private readonly logger = new Logger(ConfigsService.name);
  constructor(private prisma: PrismaService) {}

  async getConfigs(query: ConfigListQueryDTO) {
    // todo: add pagination
    return await this.prisma.config.findMany();
  }

  async createConfig(data: ConfigCreateDTO) {
    // todo: add more check
    return await this.prisma.config.create({
      data: data,
    });
  }

  async getConfig(id: string) {
    return await this.prisma.config.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getConfigVersions(query: any) {
    return await this.prisma.version.findMany(query);
  }

  async getConfigVersion(id: string) {
    return await this.prisma.version.findUnique({
      where: {
        id: id,
      },
    });
  }

  async publishConfigVersion(id: string) {
    return await this.prisma.version.update({
      where: {
        id: id,
      },
      data: {
        // published: true,
      },
    });
  }

  async deleteConfigVersion(id: string) {
    // todo: add more check
    return await this.prisma.version.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
