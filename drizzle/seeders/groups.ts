import { db } from "../db";
import { groups } from "../schema/groups";

async function Groups() {
  console.log("Seeding groups");
  await db
    .insert(groups)
    .values([{ name: "admin" }, { name: "merchant" }, { name: "client" }]);
  const res = await db.select().from(groups);
  console.log("The folowing data was added to database", res);
}

export default Groups;
