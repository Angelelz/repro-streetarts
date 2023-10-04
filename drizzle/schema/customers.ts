import {
  date,
  datetime,
  int,
  mysqlTable,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { genders } from "./genders";
import { langs } from "./langs";
import { groups } from "./groups";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const customers = mysqlTable("customers", {
  id_customer: int("id_customer").primaryKey().autoincrement(),
  id_gender: int("id_gender").references(() => genders.id_gender),
  id_lang: int("id_lang").references(() => langs.id_lang),
  id_group: int("id_group").references(() => groups.id_group),
  firstname: varchar("firstname", { length: 256 }).notNull(),
  lastname: varchar("lastname", { length: 256 }).notNull(),
  id_clerk: varchar("id_clerk",{length:255}),
  phone_number: varchar('phone_number',{length:20}),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
  last_password_gen: timestamp("last_password_gen"),
  birthday: date("birthday"),
  profile_picture: varchar("profile_picture", { length: 256 }),
  date_add: datetime("date_add"),
  date_updated: datetime("date_update"),
});

export type insertCustomerSchema = InferInsertModel<typeof customers>;
export type selectCustomerSchema = InferSelectModel<typeof customers>;
