import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { Role } from "../constants/role";
import { Status } from "../constants/status";


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: Role.USER,
                required:false
            },
            status: {
                type: "string",
                defaultValue: Status.ACTIVE,
                required:false
            }
        }
    },
    trustedOrigins: [process.env.APP_URL || "http://localhost:3000"],
});