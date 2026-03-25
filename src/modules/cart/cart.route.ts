import express from "express"
import { CartController } from "./cart.controller"

const router = express.Router();

router.get("/", CartController.getCart);
router.post("/", CartController.addToCart);
router.patch("/:itemId", CartController.updateCartItem);
router.delete("/:itemId", CartController.removeFromCart);
router.delete("/", CartController.clearCart);

export const CartRouter = router;
