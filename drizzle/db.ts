import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from './schema'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'streets',
  port: 3306
});
export const db = drizzle(connection, { schema, mode: 'default', logger: true });
