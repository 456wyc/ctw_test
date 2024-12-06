/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { EnvCreateDTO, EnvListQueryDTO } from './envs.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EnvsService {
  private readonly logger = new Logger(EnvsService.name);
  constructor(private prisma: PrismaService) {}

  async getEnvs(query: EnvListQueryDTO) {
    const where: Prisma.EnvWhereInput = {
      deletedAt: null,
    };
    if (query.name) {
      where.name = {
        contains: query.name,
      };
    }
    if (query.desc) {
      where.desc = {
        contains: query.desc,
      };
    }
    const [list, total] = await Promise.all([
      this.prisma.env.findMany({
        where,
        take: query.size,
        skip: (query.page - 1) * query.size,
        orderBy: { [query.orderBy]: query.order },
      }),
      this.prisma.env.count({
        where,
      }),
    ]);
    return { list, total, page: query.page, size: query.size };
  }

  async getEnvById(id: string) {
    const env = await this.prisma.env.findUnique({
      where: {
        id: id,
        deletedAt: null,
      },
    });
    return env;
  }

  async createEnv(env: EnvCreateDTO) {
    // todo: add more check
    const newEnv = await this.prisma.env.create({
      data: env,
    });
    return newEnv;
  }

  async updateEnv(id: string, env: any) {
    // todo: add more check
    const updatedEnv = await this.prisma.env.update({
      where: {
        id: id,
      },
      data: env,
    });
    return updatedEnv;
  }

  async deleteEnv(id: string) {
    // todo: add more check
    const deletedEnv = await this.prisma.env.delete({
      where: {
        id: id,
      },
    });
    return deletedEnv;
  }
}
