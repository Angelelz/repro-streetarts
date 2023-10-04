import { db } from "../db";
import { customers } from "../schema/customers";

async function Admin() {
  const customer = {
    profile_picture: "https://lh3.googleusercontent.com/a/AAcHTterTuTtEhs1hZs9fYkegHCfdsMBX_cM8UyxorBssYE3NwM=s1000-c",
    lastname: "R.",
    firstname: "Hugo",
    id_clerk: "user_2UTDrNFrpFYccEasywI5ZpKDQj0",
    email: "hugo.robitaillie@gmail.com",
    date_add: new Date(),
    date_updated: new Date(),
    id_group: 1
  };
  await db.insert(customers).values(customer);
  const res = await db.select().from(customers);
  console.log("The folowing data was added to database", res);
}

export default Admin;
