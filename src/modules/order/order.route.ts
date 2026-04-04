import express from "express"
import { OrderController } from "./order.controller.js"

const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

router.get("/user/:userId", OrderController.getUserOrders);
router.patch("/:id", OrderController.updateOrderStatus);
router.delete("/:id", OrderController.deleteOrder);

export const OrderRouter = router;
