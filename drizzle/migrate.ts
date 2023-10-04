import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from "mysql2/promise";


mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'streets',
  port: 3306
}).then((connection) => {
  const migrationDB = drizzle(connection);
  return migrate(migrationDB, { migrationsFolder: "./drizzle/migrations" });
}).then(() => console.log("Migration completed! ✅"))
  .catch((error) => {
    console.error("Migration failed! ❌");
    console.error(error);
  })
