import { db } from "../db";
import { currencies } from "../schema/currencies";

async function Currencies() {
  console.log("Seeding currencies");
  await db.insert(currencies).values({ name: "euros" });
  const res = await db.select().from(currencies);
  console.log("The folowing data was added to database", res);
}

export default Currencies;
