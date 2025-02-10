import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/lib/db/drizzle';
import { user, session, account, verification } from '@/lib/db/schema/auth';

export const auth = betterAuth({
    plugins: [nextCookies()],
    database: drizzleAdapter(db, {
        provider: 'pg', // or "mysql", "sqlite"
        schema: {
            user,
            session,
            account,
            verification,
        },
    }),
    emailAndPassword: {
        enabled: true,
    },
});
