import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { carts } from "./carts";
import { formulas } from "./formulas";

export const carts_formulas = mysqlTable("carts_formulas", {
  id_cart_formula: int("id_cart_formula").primaryKey().autoincrement(),
  id_cart: int("id_cart").references(() => carts.id_cart),
  id_formula: int("id_formula").references(() => formulas.id_formula),
  quantity: int("quantity"),
});
