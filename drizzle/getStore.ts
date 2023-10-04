import { eq } from "drizzle-orm";
import { db } from "./db";
import { stores } from "./schema/stores";


export const getStore = async (cuid_store: string) => {
  const result = await db.query.stores.findMany({
    // where: eq(stores.cuid_store, cuid_store),
    with: {
      categories: true,
      pictures: true
    },
  });
  console.log(result);
};
