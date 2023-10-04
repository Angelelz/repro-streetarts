import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const genders = mysqlTable("genders", {
  id_gender: int("id_gender").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
});
