import { seed } from "./seed";

seed().then(() => {
  console.log("Seed completed! ✅")
  process.exit(0);
}).catch((error) => {
  console.error("Seed failed! ❌");
  console.error(error);
  process.exit(1);
});
