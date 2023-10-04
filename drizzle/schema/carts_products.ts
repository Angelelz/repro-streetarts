import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { carts } from "./carts";
import { products } from "./products";

export const carts_products = mysqlTable("carts_products", {
  id_cart: int("id_cart").references(() => carts.id_cart),
  id_product: int("id_product").references(() => products.id_product),
});
