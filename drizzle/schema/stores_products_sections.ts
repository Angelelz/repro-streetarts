import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { stores } from "./stores";
import { relations } from "drizzle-orm";

export const stores_products_sections = mysqlTable("stores_products_sections", {
  id_section: int("id_section").primaryKey().autoincrement(),
  id_store: int("id_store").references(() => stores.id_store),
  name: varchar("name", { length: 256 }),
  section: int("section_order"),
});
export const stores_products_sectionsRelations = relations(stores_products_sections, ({ one }) => ({
	store: one(stores, {
		fields: [stores_products_sections.id_store],
		references: [stores.id_store],
	}),
}));