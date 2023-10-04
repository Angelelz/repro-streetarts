import { int, mysqlTable } from "drizzle-orm/mysql-core";
import { formulas } from "./formulas";
import { products } from "./products";

export const formulas_products = mysqlTable('formulas_products',{
    id_formulas: int('id_formula').references(()=> formulas.id_formula),
    id_product: int('id_product').references(()=> products.id_product),
    maximal_quantity: int('maximal_quantity'),
})