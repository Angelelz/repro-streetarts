import { db } from "../db";
import { langs } from "../schema/langs";

async function Langs() {
  console.log("Seeding langs");
  await db
    .insert(langs)
    .values([{ name: "Francais", iso_code: "fr-FR" }]);
  const res = await db.select().from(langs);
  console.log("The folowing data was added to database", res);
}

export default Langs;
