import { Injectable, InternalServerErrorException } from "@nestjs/common";
import LoginInput from "src/application/ports/auth/loginInput";
import User from "src/domain/models/user";
import UserAdapter from "src/infra/adapters/userAdapter";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import LoginOutput from "src/application/ports/auth/LoginOutput";

@Injectable()
class Login {
    constructor(private readonly userAdapter: UserAdapter) { }

    async execute(input: LoginInput): Promise<LoginOutput> {
        input.validate();

        const userFound = await this.findUserByEmail(input.email);

        await this.comparePassword(input.password, userFound.password);

        const token = this.generateToken(userFound.id);

        return new LoginOutput(token, "Authentication successful.");
    }

    private async findUserByEmail(email: string): Promise<User> {
        const user = await this.userAdapter.findUserByEmail(email);

        if (!user) throw new InternalServerErrorException("User not found.");

        return user;
    }

    private async comparePassword(passwordInput: string, hashPassword: string): Promise<void> {
        const passwordMatch = await bcrypt.compare(passwordInput, hashPassword);

        if (!passwordMatch) throw new InternalServerErrorException("Password does not match.");
    }

    private generateToken(id: string) {
        const secret = process.env.SECRET;

        const token = jwt.sign({ id }, secret, { expiresIn: 300 });

        return token;
    }
};

export default Login;

