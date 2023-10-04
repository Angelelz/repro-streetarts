import {
  boolean,
  datetime,
  decimal,
  float,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { currencies } from "./currencies";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { stores_pictures } from "./stores_pictures";
import { stores_categories } from "./stores_categories";
import { stores_products_sections } from "./stores_products_sections";
import { stores_team } from "./stores_team";
import { stores_reviews } from "./stores_reviews";

export const stores = mysqlTable("stores", {
  id_store: int("id_store").primaryKey().autoincrement(),
  cuid_store: varchar("cuid_store", { length: 191 }).notNull(),
  id_currency: int("id_currency").references(() => currencies.id_currency),
  name: varchar("name", { length: 256 }),
  baseline: varchar("baseline", { length: 256 }),
  realtime_position: float("realtime_position"),
  last_position_updated: timestamp("last_position_updated"),
  profile_picture: varchar("profile_picture", { length: 256 }),
  featured_label: varchar("featured_label", { length: 256 }).default("Populaire"),
  siret: varchar("siret", { length: 14 }),
  ape: varchar("ape", { length: 5 }),
  wrapping_enabled: boolean("wrapping_enabled").default(false),
  wrapping_price: decimal("wrapping_price"),
  cutleries_enabled: boolean("cutleries_enabled").default(false),
  cutleries_price: decimal("cutleries_price"),
  date_add: datetime("date_add"),
  date_updated: datetime("date_update"),
});

export const storesRelations = relations(stores, ({ many }) => ({
  categories: many(stores_categories),
  pictures: many(stores_pictures),
  products_sections: many(stores_products_sections),
  reviews: many(stores_reviews),
  team: many(stores_team),
}))


export type insertStoreSchema = InferInsertModel<typeof stores>;
export type selectStoreSchema = InferSelectModel<typeof stores>;