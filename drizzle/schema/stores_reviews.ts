import { datetime, int, mysqlTable, tinytext } from "drizzle-orm/mysql-core";
import { stores } from "./stores";
import { relations } from "drizzle-orm";

export const stores_reviews = mysqlTable("stores_reviews", {
  id_review: int("id_review").primaryKey().autoincrement(),
  id_store: int("id_store").references(() => stores.id_store),
  rating: int("rating"),
  date: datetime("date"),
  commentary: tinytext("commentary"),
});

export const stores_reviewsRelations = relations(stores_reviews, ({ one }) => ({
	store: one(stores, {
		fields: [stores_reviews.id_store],
		references: [stores.id_store],
	}),
}));