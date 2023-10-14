import { Body, Controller, HttpCode, Post, Get, Headers, Header, UseGuards } from '@nestjs/common';
import CreateUserRequest from '../dtos/user/createUserRequest';
import { ApiHeader, ApiBearerAuth, ApiResponse, ApiHeaders } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import CreateUser from 'src/application/useCases/user/createUser';
import CreateUserInput from 'src/application/ports/user/createUserInput';
import AuthGuard from '../guard/authGuard';
import ListUsers from 'src/application/useCases/user/listUsers';

@ApiTags('user')
@Controller('user')
export class UserController {
	constructor(private readonly createUser: CreateUser, private readonly listUsers: ListUsers) { }

	@Post()
	@HttpCode(201)
	async create(@Body() user: CreateUserRequest): Promise<void> {
		await this.createUser.execute(new CreateUserInput(user.email, user.password));
	}

	@Get()
	@ApiBearerAuth('access-token')
	@UseGuards(AuthGuard)
	@HttpCode(200)
	async get(): Promise<string[]> {
		return await this.listUsers.execute();
	}
}
