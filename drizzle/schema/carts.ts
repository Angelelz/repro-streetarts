import { datetime, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { customers } from "./customers";
import { currencies } from "./currencies";
import { stores } from "./stores";

export const carts = mysqlTable("carts", {
  id_cart: int("id_cart").primaryKey().autoincrement(),
  id_address_delivery: int("id_address_delivery"),
  id_address_invoice: int("id_address_invoice"),
  id_store: int("id_store").references(() => stores.id_store),
  id_customer: int("id_customer").references(() => customers.id_customer),
  id_currency: int("id_currency").references(() => currencies.id_currency),
  secure_key: varchar("secure_key", { length: 256 }),
  date_add: datetime("date_add"),
  date_updated: datetime("date_update"),
});
