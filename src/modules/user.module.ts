import { Module } from '@nestjs/common';
import CreateUser from 'src/application/useCases/user/createUser';
import ListUsers from 'src/application/useCases/user/listUsers';
import UserAdapter from 'src/infra/adapters/userAdapter';
import UserController from 'src/web.api/user/user.controller';

@Module({
  controllers: [UserController],
  providers: [CreateUser, ListUsers, UserAdapter],
})
export default class UserModule { }