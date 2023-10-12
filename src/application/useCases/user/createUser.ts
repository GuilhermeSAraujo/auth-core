import { BadRequestException, Injectable, UnprocessableEntityException } from "@nestjs/common";
import CreateUserInput from "src/application/ports/user/createUserInput";
import UserAdapter from "src/infra/adapters/userAdapter";

@Injectable()
class CreateUser {
    constructor(private readonly userAdapter: UserAdapter) {}

    async execute(user: CreateUserInput) {
        this.validateUser(user);

        await this.verifyUserAlreadyExists(user.email);
    }

    private validateUser(user: CreateUserInput): void {
        if (!user.email || user.email.trim().length === 0) throw new BadRequestException("Email is required");
        if (!user.password) throw new BadRequestException("Password is required.");
        if (user.password.length < 8) throw new UnprocessableEntityException("Password must be at least 8 characters long");
    }

    private async verifyUserAlreadyExists(email: string): Promise<void> {
        return;
    };
};

export default CreateUser;