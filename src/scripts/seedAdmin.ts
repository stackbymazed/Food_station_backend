import { Role } from "../constants/role";
import { Status } from "../constants/status";
import { prisma } from "../lib/prisma";

async function seedAdmin() {
    try {
        console.log(" Admin Seeding Started...");

        const adminData = {
            name: "Admin Mia",
            email: "admin@gmail.com",
            role: Role.ADMIN,
            status: Status.ACTIVE,
            password: "admin1234",
        };

        console.log(" Checking if admin already exists...");

        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email,
            },
        });

        if (existingUser) {
            console.log(" Admin already exists!");
            return;
        }

        console.log(" Creating admin via Better Auth API...");

        const response = await fetch(
            "http://localhost:5000/api/auth/sign-up/email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "http://localhost:3000"
                },
                body: JSON.stringify(adminData),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.log("Better Auth error:", result);
            throw new Error("Failed to create admin via Better Auth");
        }

        console.log("Admin created successfully!");

        await prisma.user.update({
            where: {
                email: adminData.email,
            },
            data: {
                emailVerified: true,
            },
        });

        console.log(" Email verification status updated!");
        console.log(" Admin seeding completed successfully!");

    } catch (error) {
        console.error(" Admin seeding failed:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedAdmin();