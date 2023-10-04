import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
export const continents = mysqlTable("continents", {
  id_continent: int("id_continents").primaryKey().autoincrement(),
  code: varchar("code", { length: 2 }),
  name: varchar("name", { length: 30 }),
});
