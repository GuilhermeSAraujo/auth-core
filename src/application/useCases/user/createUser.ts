import { Injectable, InternalServerErrorException } from "@nestjs/common";
import CreateUserInput from "src/application/ports/user/createUserInput";
import UserAdapter from "src/infra/adapters/userAdapter";
import * as bcrypt from 'bcryptjs';

@Injectable()
class CreateUser {
    constructor(private readonly userAdapter: UserAdapter) { }

    async execute(user: CreateUserInput) {
        user.validate();

        await this.verifyUserAlreadyExists(user.email);

        const passwordHash = await this.createPasswordHash(user.password);

        await this.userAdapter.create(user.convertToRequest(passwordHash));
    }

    private async verifyUserAlreadyExists(email: string): Promise<void> {
        const result = await this.userAdapter.findUserByEmail(email);

        if (result) throw new InternalServerErrorException("User already exists");
    };

    private async createPasswordHash(password: string) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        return hash;
    }
};

export default CreateUser;