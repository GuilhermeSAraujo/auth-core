import { ApiProperty } from "@nestjs/swagger";
import CreateUserInput from "src/application/ports/user/createUserInput";

class CreateUserRequest {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
};

export default CreateUserRequest;