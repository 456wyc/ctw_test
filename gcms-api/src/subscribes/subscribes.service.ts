/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class SubscribesService {
    private readonly logger = new Logger(SubscribesService.name);
    constructor(private prisma: PrismaService) {}
  
    async createSubscribe(subscribe: any) {
        // todo
        return await this.prisma.clientSubscriptions.create({
            data: {
                ...subscribe,
            },
        });
    }
}
