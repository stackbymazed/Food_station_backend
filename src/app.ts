import express, { Request, Response } from "express"
import { MealRouter } from "./modules/meal/meal.route.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import cors from "cors";

import { OrderRouter } from "./modules/order/order.route.js";
import { CartRouter } from "./modules/cart/cart.route.js";
import { UserRouter } from "./modules/user/user.route.js";
import { PaymentRouter } from "./modules/payment/payment.route.js";
import { StatsRouter } from "./modules/stats/stats.route.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    process.env.APP_URL || "https://food-station-bd.vercel.app",
    "https://food-station.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"]
}));

app.use(express.json());



app.use("/api/auth", toNodeHandler(auth));


app.use("/meal", MealRouter)
app.use("/order", OrderRouter)
app.use("/cart", CartRouter)
app.use("/user", UserRouter)
app.use("/payment", PaymentRouter)
app.use("/stats", StatsRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;