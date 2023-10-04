import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const currencies = mysqlTable("currencies", {
  id_currency: int("id_currency").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
});

export type selectCurrenciesSchema = InferSelectModel<typeof currencies>;
export type insertCurrenciesSchema = InferInsertModel<typeof currencies>;