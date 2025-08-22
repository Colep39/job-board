import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from '@/env/server';

export default defineConfig({
    out: './src/drizzle/migrations',
    schema: './src/drizzle/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL || 'postgres://postgres:password@localhost:5432/postgres'
    }
});