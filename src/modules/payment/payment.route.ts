import express from "express";
import { paymentController } from "./payment.controller";

const router = express.Router();

router.post("/create-intent", paymentController.createPaymentIntent);

export const PaymentRouter = router;
