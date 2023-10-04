import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { stores } from "./stores";
import { categories } from "./categories";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";

export const stores_categories = mysqlTable('stores_categories',{
    id_store: int("id_store").references(() => stores.id_store, {onDelete: "cascade", onUpdate:"cascade"}),
    id_category: int("id_category").references(() => categories.id_category, {onDelete: "cascade", onUpdate:"cascade"}),
})

export const stores_categoriesRelations = relations(stores_categories, ({ one }) => ({
	store: one(stores, {
		fields: [stores_categories.id_store],
		references: [stores.id_store],
	}),
}));

export type selectStoreCategorySchema = InferSelectModel<typeof stores_categories>;
export type insertStoreCategorySchema = InferInsertModel<typeof stores_categories>;