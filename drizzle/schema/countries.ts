import { char, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const countries = mysqlTable("countries", {
  id_country: int("id_country").primaryKey().autoincrement(),
  code: varchar("code", { length: 2 }),
  name: varchar("name", { length: 100 }),
  phone: varchar("phone", { length: 20 }),
  symbol: varchar("symbol", { length: 10 }),
  currency: varchar("currency", { length: 3 }),
  continent: varchar("continent", { length: 30 }),
  continent_code: varchar("continent_code", { length: 2 }),
  alpha_3: char("alpha_3", { length: 3 }),
});
