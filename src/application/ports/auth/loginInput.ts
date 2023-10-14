import { BadRequestException } from "@nestjs/common";

class LoginInput {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  validate(): void {
    if (!this.email || this.email.trim().length === 0) throw new BadRequestException("Email is required");
    if (!this.password) throw new BadRequestException("Password is required.");
  }
};

export default LoginInput;