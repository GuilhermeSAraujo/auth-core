import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './web.api/user/user.controller';
import CreateUser from './application/useCases/user/createUser';
import UserAdapter from './infra/adapters/userAdapter';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, CreateUser, UserAdapter]
})
export class AppModule {}
