import { seed } from "./seed";

seed().then(() => console.log("Seed completed! ✅")).catch((error) => {
  console.error("Seed failed! ❌");
  console.error(error);
});
