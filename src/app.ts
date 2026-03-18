import express, { Request, Response } from "express"
import { MealRouter } from "./modules/meal/meal.route";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors";

import { OrderRouter } from "./modules/order/order.route";

const app = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true
}));
app.use(express.json())


app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use("/meal", MealRouter)
app.use("/order", OrderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;