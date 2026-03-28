import { Request, Response } from "express"
import { CartServices } from "./cart.service.js"
import { auth } from "../../lib/auth.js"

const getSessionUser = async (req: Request) => {
    // better-auth session retrieval
    const session = await auth.api.getSession({
        headers: new Headers(req.headers as any)
    });
    return session?.user;
}

const getCart = async (req: Request, res: Response) => {
    try {
        const user = await getSessionUser(req);
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const result = await CartServices.getCart(user.id);
        res.status(200).json({
            success: true,
            message: "Cart fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const addToCart = async (req: Request, res: Response) => {
    try {
        const user = await getSessionUser(req);
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const { mealId, quantity } = req.body;
        const result = await CartServices.addToCart(user.id, Number(mealId), Number(quantity));
        res.status(200).json({
            success: true,
            message: "Item added to cart",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const updateCartItem = async (req: Request, res: Response) => {
    try {
        const { itemId } = req.params;
        const { quantity } = req.body;
        const result = await CartServices.updateCartItemQuantity(itemId as string, Number(quantity));
        res.status(200).json({
            success: true,
            message: "Cart item updated",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const removeFromCart = async (req: Request, res: Response) => {
    try {
        const { itemId } = req.params;
        const result = await CartServices.removeFromCart(itemId as string);
        res.status(200).json({
            success: true,
            message: "Item removed from cart",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}

const clearCart = async (req: Request, res: Response) => {
    try {
        const user = await getSessionUser(req);
        if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });

        await CartServices.clearCart(user.id);
        res.status(200).json({
            success: true,
            message: "Cart cleared"
        });
    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const CartController = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
}
