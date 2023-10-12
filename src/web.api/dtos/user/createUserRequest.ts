import { ApiProperty } from "@nestjs/swagger";

class CreateUserRequest{
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;
};

export default CreateUserRequest;