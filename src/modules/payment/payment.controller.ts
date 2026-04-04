import { Request, Response } from "express";
import { paymentService } from "./payment.service.js";

export const paymentController = {
  createPaymentIntent: async (req: Request, res: Response) => {
    try {
      // console.log("[PAYMENT_CONTROLLER] Received body:", req.body);
      const { amount, currency } = req.body;
      const result = await paymentService.createPaymentIntent(Number(amount), currency);
      res.json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
