import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './lib/drizzle',
    schema: './lib/db/schema/',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
