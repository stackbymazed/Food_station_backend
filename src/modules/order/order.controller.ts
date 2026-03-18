import { Request, Response } from "express"
import { OrderServices } from "./order.service"

const createOrder = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.createOrder(req.body);
        
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create order",
            error: err.message || err
        });
    }
}

const getUserOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId as string;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required"
            });
        }
        const result = await OrderServices.getUserOrders(userId);
        
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: err.message || err
        });
    }
}

export const OrderController = {
    createOrder,
    getUserOrders,
}
