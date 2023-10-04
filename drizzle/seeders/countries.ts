import { db } from "../db";
import { countries } from "../schema/countries";
// @ts-ignore
import json from "../seeders/countries.json"

async function Countries() {
  console.log("Seeding Countries");
  await db.insert(countries).values(json);
  const res = await db.select().from(countries);
  console.log("The folowing data was added to database", res);
}

export default Countries;
