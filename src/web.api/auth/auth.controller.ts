import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import LoginRequest from '../dtos/auth/loginRequest';
import Login from 'src/application/useCases/auth/login';
import LoginInput from 'src/application/ports/auth/loginInput';
import LoginOutput from 'src/application/ports/auth/LoginOutput';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly login: Login) { }

    @Post()
    @HttpCode(200)
    async loginUser(@Body() request: LoginRequest){
        return await this.login.execute(new LoginInput(request.email, request.password));
    }
}
