import { db } from "../db";
import { continents } from "../schema/continents";
// @ts-ignore
import json from "./continents.json"

async function Continents() {
  console.log("Seeding Continents");
  await db.insert(continents).values(json);
  const res = await db.select().from(continents);
  console.log("The folowing data was added to database", res);
}

export default Continents;
