import { InferInsertModel, InferModel, InferSelectModel } from "drizzle-orm";
import { char, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const categories = mysqlTable("categories", {
  id_category: int("id_category").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }),
  icon: varchar("icon", { length: 256 }),
});


export type selectCategorySchema = InferSelectModel<typeof categories>;
export type insertCategorySchema = InferInsertModel<typeof categories>;