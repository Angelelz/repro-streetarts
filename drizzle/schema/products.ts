import {
  boolean,
  datetime,
  decimal,
  int,
  mysqlTable,
  tinytext,
  varchar,
} from "drizzle-orm/mysql-core";
import { stores_products_sections } from "./stores_products_sections";

export const products = mysqlTable("products", {
  id_product: int("id_product").primaryKey().autoincrement(),
  id_section: int("id_section").references(
    () => stores_products_sections.id_section
  ),
  name: varchar("name", { length: 256 }),
  description: tinytext("description"),
  picture: varchar("picture", { length: 256 }),
  buying_price: decimal("buying_price"),
  selling_price: decimal("selling_price"),
  price_saled: decimal("price_saled"),
  on_sale: boolean("on_sale").default(false),
  quantity: int("quantity"),
  minimal_quantity: int("minimal_quantity"),
  is_featured: boolean("is_featured").default(false),
  visible: boolean("visible").default(false),
  date_add: datetime("date_add"),
  date_updated: datetime("date_update"),
});
