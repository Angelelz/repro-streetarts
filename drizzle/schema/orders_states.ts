import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const orders_states = mysqlTable('orders_states',{
    id_order_state: int("id_order_state").primaryKey().autoincrement(),
    name: varchar('name',{length:256}),
    send_email: boolean('send_email'),
    send_notification: boolean('send_notification'),
})