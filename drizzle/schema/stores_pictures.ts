import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { stores } from "./stores";
import { relations } from "drizzle-orm";

export const stores_pictures = mysqlTable("stores_pictures",{
    id_picture: int('id_picture').primaryKey().autoincrement(),
    id_store: int('id_store').references(()=>stores.id_store, {onDelete: "cascade", onUpdate:"cascade"}),
    img_url: varchar('img_url', {length: 255})

})


export const stores_picturesRelations = relations(stores_pictures, ({ one }) => ({
	store: one(stores, {
		fields: [stores_pictures.id_store],
		references: [stores.id_store],
	}),
}));