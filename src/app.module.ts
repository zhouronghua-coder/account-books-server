import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    AccountModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
