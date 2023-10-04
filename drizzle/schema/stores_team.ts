import { int, mysqlEnum, mysqlTable } from "drizzle-orm/mysql-core";
import { stores } from "./stores";
import { customers } from "./customers";
import { relations } from "drizzle-orm";

export const stores_team = mysqlTable("stores_team", {
  id_store: int("id_store").references(() => stores.id_store, {onDelete: "cascade", onUpdate:"cascade"}).notNull(),
  id_customer: int("id_customer").references(() => customers.id_customer, {onDelete: "cascade", onUpdate:"cascade"}).notNull(),
  status: mysqlEnum("status", ["owner","employee"])
});

export const stores_teamRelations = relations(stores_team, ({ one }) => ({
	store: one(stores, {
		fields: [stores_team.id_store],
		references: [stores.id_store],
	}),
}));