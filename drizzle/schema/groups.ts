import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const groups = mysqlTable("groups", {
  id_group: int("id_group").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
});
