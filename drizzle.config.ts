import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema/",
  out: "./drizzle/migrations/",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
  } as any,
  breakpoints: true,
} satisfies Config;
