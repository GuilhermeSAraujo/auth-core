import { Module } from '@nestjs/common';
import Login from 'src/application/useCases/auth/login';
import UserAdapter from 'src/infra/adapters/userAdapter';
import { AuthController } from 'src/web.api/auth/auth.controller';
import AuthGuard from 'src/web.api/guard/authGuard';

@Module({
  controllers: [AuthController],
  providers: [Login, UserAdapter, AuthGuard],
})
export default class AuthModule {}