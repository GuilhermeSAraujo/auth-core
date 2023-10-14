import { BadRequestException, UnprocessableEntityException } from "@nestjs/common";
import CreateUserRequest from "src/domain/models/createUserRequest";

class CreateUserInput {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    validate(): void {
        if (!this.email || this.email.trim().length === 0) throw new BadRequestException("Email is required.");
        if (!this.password) throw new BadRequestException("Password is required.");
        if (this.password.length < 8) throw new UnprocessableEntityException("Password must be at least 8 characters long.");
    }

    convertToRequest(passwordHash: string): CreateUserRequest {
        return new CreateUserRequest(this.email, passwordHash);
    }
};

export default CreateUserInput;