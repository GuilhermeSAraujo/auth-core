import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import CreateUserRequest from '../dtos/user/createUserRequest';
import { ApiTags } from '@nestjs/swagger';
import CreateUser from 'src/application/useCases/user/createUser';
import CreateUserInput from 'src/application/ports/user/createUserInput';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly createUser: CreateUser) {}

    @Post()
    @HttpCode(201)
    async create(@Body() user : CreateUserRequest) : Promise<void>{
        await this.createUser.execute(new CreateUserInput(user.email, user.password));
    } 
}
