import { defineConfig } from 'drizzle-kit'
import dotenv from "dotenv";
dotenv.config();

if (!process.env.DB_URL) {
    throw new Error("DB_URL environment variable is missing");
}

export default defineConfig({
  schema: "./src/lib/db/Schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL,
  },
  verbose: true,
  strict: true,
})

// .local.env is for files inside src folder
// .env folder is used for outsider file not in src