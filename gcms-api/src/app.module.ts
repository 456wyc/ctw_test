import { ClientsModule } from './clients/clients.module';
import { SubscribesModule } from './subscribes/subscribes.module';
import { GroupsModule } from './groups/groups.module';
import { ConfigsModule } from './configs/configs.module';
import { EnvsModule } from './envs/envs.module';
import { UserModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule,
    SubscribesModule,
    GroupsModule,
    ConfigsModule,
    EnvsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
