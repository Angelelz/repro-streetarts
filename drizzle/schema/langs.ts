import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const langs = mysqlTable("langs", {
  id_lang: int("id_lang").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }),
  iso_code: varchar("iso_code", { length: 5 }),
});
