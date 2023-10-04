import { db } from "./db";
import { categories } from "./schema/categories";
import { continents } from "./schema/continents";
import { countries } from "./schema/countries";
import { currencies } from "./schema/currencies";
import { customers } from "./schema/customers";
import { genders } from "./schema/genders";
import { groups } from "./schema/groups";
import { langs } from "./schema/langs";
import Admin from "./seeders/admin";
import Categories from "./seeders/categories";
import Continents from "./seeders/continents";
import Countries from "./seeders/countries";
import Currencies from "./seeders/currencies";
import Genders from "./seeders/genders";
import Groups from "./seeders/groups";
import Langs from "./seeders/langs";



export async function seed() {
  const isGroups = await db.select().from(groups)
  if (isGroups.length == 0) {
    console.log("Seeding Groups...");
    await Groups()
  } else {
    console.log("No need to seed Groups")
  }

  const isCountries = await db.select().from(countries)
  if (isCountries.length == 0) {
    console.log("Seeding Countries...");
    await Countries()
  } else {
    console.log("No need to seed Countries")

  }

  const isContinent = await db.select().from(continents)
  if (isContinent.length == 0) {
    console.log("Seeding Continents...");
    await Continents()
  } else {
    console.log("No need to seed Continents")
  }

  const isGenders = await db.select().from(genders)
  if (isGenders.length == 0) {
    console.log("Seeding Genders...");
    await Genders()
  } else {
    console.log("No need to seed Genders")
  }

  const isLangs = await db.select().from(langs)
  if (isLangs.length == 0) {
    console.log("Seeding Langs...");
    await Langs()
  } else {
    console.log("No need to seed Langs")
  }

  const isCategories = await db.select().from(categories)
  if (isCategories.length == 0) {
    console.log("Seeding Categories...");
    await Categories()
  } else {
    console.log("No need to seed Categories")
  }

  const isAdmin = await db.select().from(customers)
  if (isAdmin.length == 0) {
    console.log("Seeding Categories...");
    await Admin()
  } else {
    console.log("No need to seed Categories")
  }

  const isCurrencies = await db.select().from(currencies)
  if (isCurrencies.length == 0) {
    console.log("Seeding Currencies...");
    await Currencies()
  } else {
    console.log("No need to seed Currencies")
  }

}
