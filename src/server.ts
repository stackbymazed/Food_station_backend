import "dotenv/config";
import app from "./app.js";
import { prisma } from "./lib/prisma.js";

const port = process.env.PORT || 5000;

async function main() {
    try {
        await prisma.$connect();
        console.log("connect database successfully!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.error("something wrong", err);
        await prisma.$disconnect();
        process.exit(1);
    }
}

main();