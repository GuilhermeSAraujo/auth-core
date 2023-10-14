import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { UserController } from './web.api/user/user.controller';
import { AuthController } from './web.api/auth/auth.controller';
import CreateUser from './application/useCases/user/createUser';
import UserAdapter from './infra/adapters/userAdapter';
import Login from './application/useCases/auth/login';
import AuthGuard from './web.api/guard/authGuard';
import ListUsers from './application/useCases/user/listUsers';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UserController, AuthController],
  providers: [CreateUser, Login, ListUsers, UserAdapter, AuthGuard]
})
export class AppModule { }
