import "dotenv/config";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";
import { Role } from "../constants/role.js";
import { Status } from "../constants/status.js";


export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL || (process.env.NODE_ENV === "production" ? "https://food-station-backend.vercel.app" : "http://localhost:5000"),
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: Role.USER,
                required: false
            },
            status: {
                type: "string",
                defaultValue: Status.ACTIVE,
                required: false
            }
        }
    },
    trustedOrigins: [
        "http://localhost:3000",
        "https://food-station-bd.vercel.app",
        "https://food-station.vercel.app",
        process.env.APP_URL as string
    ],
    advanced: {
        crossStoreCookies: {
            enabled: true
        },
        defaultCookieAttributes: {
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        }
    }
});