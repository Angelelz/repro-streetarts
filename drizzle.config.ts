import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema/",
  out: "./drizzle/migrations/",
  driver: "mysql2",
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'streets',
    port: 3306
  },
  breakpoints: true,
} satisfies Config;
