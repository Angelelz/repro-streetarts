import { db } from "../db";
import { genders } from "../schema/genders";

async function Genders() {
  console.log("Seeding genders");
  await db
    .insert(genders)
    .values([{ name: "male" }, { name: "female" }]);
  const res = await db.select().from(genders);
  console.log("The folowing data was added to database", res);
}

export default Genders;
