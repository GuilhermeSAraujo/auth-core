import { Pool } from 'pg';

const pool = new Pool({
    host:'db',
    database: 'auth-core',
    user: 'root',
    password: '1234'
});

export default pool;