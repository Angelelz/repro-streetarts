# repro-streetarts

To install dependencies:

```bash
bun install
```

To run:
 - use .env.example file to create your own .env file and edit it with your database credentials
 - run
```bash
bun ./drizzle/migrate.ts
bun ./drizzle/do_seed.ts
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
