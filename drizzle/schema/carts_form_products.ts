import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { carts_formulas } from "./carts_formulas";
import { products } from "./products";

export const carts_form_products = mysqlTable("carts_form_products", {
  id_cart_formula: int("id_carts_formula").references(
    () => carts_formulas.id_cart_formula
  ),
  id_product: int("id_product").references(() => products.id_product),
  quantity: int("quantity"),
}) ;
