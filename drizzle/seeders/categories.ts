import { db } from "../db";
import { categories } from "../schema/categories";
// @ts-ignore
import json from "./categories.json"

async function Categories() {
  console.log("Seeding categories");
  await db.insert(categories).values(json);
  const res = await db.select().from(categories);
  console.log("The folowing data was added to database", res);
}

export default Categories;
