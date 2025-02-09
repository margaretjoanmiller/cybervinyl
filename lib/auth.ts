import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/lib/db/drizzle' // your drizzle instance

export const auth = betterAuth({
    plugins: [nextCookies()],
    database: drizzleAdapter(db, {
        provider: 'sqlite', // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled: true,
    },
})
