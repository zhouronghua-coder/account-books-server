import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { accountProviders } from './account.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, ...accountProviders],
})
export class AccountModule {}
