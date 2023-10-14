import { Injectable } from "@nestjs/common";
import pool from "../connectionDb";
import User from "src/domain/models/user";
import CreateUserRequest from "src/domain/models/createUserRequest";

@Injectable()
class UserAdapter {
    public async findUserByEmail(email: string): Promise<User | null> {

        const result = await pool.query(`
            SELECT id, email, password FROM user_account
            WHERE email = $1`, [email]);

        if (result.rows.length === 0) return null;
        return new User(result.rows[0].id, result.rows[0].email, result.rows[0].password);
    };

    public async create(request: CreateUserRequest): Promise<void> {
        await pool.query(`
            INSERT INTO user_account (email, password)
            VALUES ($1, $2)`, [request.email, request.password]);
    }

    public async list() : Promise<string[]> {
        return (await pool.query(`select id, email from user_account`)).rows;
    }
};

export default UserAdapter;