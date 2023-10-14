import { Injectable } from "@nestjs/common";
import UserAdapter from "src/infra/adapters/userAdapter";

@Injectable()
class ListUsers {
  constructor(private readonly userAdapter: UserAdapter) { }

  async execute(): Promise<string[]> {
    return await this.userAdapter.list();
  }
}

export default ListUsers;