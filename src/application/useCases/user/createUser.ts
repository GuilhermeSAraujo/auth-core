import { BadRequestException, Injectable, InternalServerErrorException, UnprocessableEntityException } from "@nestjs/common";
import CreateUserInput from "src/application/ports/user/createUserInput";
import UserAdapter from "src/infra/adapters/userAdapter";

@Injectable()
class CreateUser {
    constructor(private readonly userAdapter: UserAdapter) { }

    async execute(user: CreateUserInput) {
        user.validate();

        await this.verifyUserAlreadyExists(user.email);

        await this.userAdapter.create(user.convertToRequest());
    }

    private async verifyUserAlreadyExists(email: string): Promise<void> {
        const result = await this.userAdapter.findUserByEmail(email);

        if (result) throw new InternalServerErrorException("User already exists");
    };
};

export default CreateUser;