import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";


mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
} as any).then((connection) => {
  const migrationDB = drizzle(connection);
  return migrate(migrationDB, { migrationsFolder: "./drizzle/migrations" });
}).then(() => console.log("Migration completed! ✅"))
  .catch((error) => {
    console.error("Migration failed! ❌");
    console.error(error);
  })
