import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
    type: 'postgres',
    database: 'example',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678'
}