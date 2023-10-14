import { ApiProperty } from "@nestjs/swagger";

class LoginRequest{
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export default LoginRequest;