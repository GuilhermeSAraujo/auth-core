import { UUID } from "crypto";

class User{
    id: UUID;
    email: string;
    password: string;

    constructor(id: UUID, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}

export default User;