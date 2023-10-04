import { datetime, decimal, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { carts } from "./carts";
import { stores } from "./stores";
import { customers } from "./customers";
import { orders_states } from "./orders_states";

export const orders = mysqlTable('orders',{
    id_orders: int('id_orders').primaryKey().autoincrement(),
    id_cart: int('id_cart').references(()=> carts.id_cart),
    id_customer: int('id_customer').references(()=> customers.id_customer),
    id_store: int('id_store').references(()=> stores.id_store),
    id_order_state: int('id_order_state').references(()=> orders_states.id_order_state),
    reference: varchar('reference',{length:256}),
    id_address_delivery: int("id_address_delivery"),
    id_address_invoice: int("id_address_invoice"),
    total_paid: decimal("total_paid"),
    total_paid_tax_included: decimal("total_paid_tax_included"),
    total_shipping: decimal("total_shipping"),
    total_shipping_tax_included: decimal("total_shipping_tax_included"),
    total_discount: decimal("total_discount"),
    total_discount_tax_included: decimal("total_discount_tax_included"),
    total_wrapping: decimal("total_wrapping"),
    total_wrapping_tax_included: decimal("total_wrapping_tax_included"),
    id_invoice: int('id_invoice'),
    id_payment_method: int('id_payment_method'),
    date_add: datetime("date_add"),
    date_updated: datetime("date_update"),
  
})