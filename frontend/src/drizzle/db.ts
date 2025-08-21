import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_URL } from '@/env/server';
import * as schema from '@/drizzle/schema';

export const db = drizzle(DATABASE_URL, { schema });