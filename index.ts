import { db } from "./drizzle/db";
import { getStore } from "./drizzle/getStore";
import { stores, stores_categories } from "./drizzle/schema";

console.log("Hello via Bun!");
await db.delete(stores)

await db.insert(stores).values([
  {
    id_store: 1,
    cuid_store: "store1",
    id_currency: 1,
    name: "store1",
  },
  {
    id_store: 2,
    cuid_store: "store2",
    id_currency: 1,
    name: "store2",
  }
])
await db.delete(stores_categories)

await db.insert(stores_categories).values([{
  id_store: 1,
  id_category: 1
},
{
  id_store: 1,
  id_category: 2
},
{
  id_store: 1,
  id_category: 3
},
{
  id_store: 1,
  id_category: 4
},
{
  id_store: 2,
  id_category: 1
},
{
  id_store: 2,
  id_category: 2
}
])




await getStore("store1")

console.log("done")

process.exit(0)
