import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";

dotenv.config();

const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: PG_HOST || "localhost",
    port: Number(PG_PORT) || 5432,
    username: PG_USER || 'default_user',
    password: PG_PASSWORD || 'default_password',
    database: PG_DATABASE,
    synchronize: true,
    logging: false,
});
