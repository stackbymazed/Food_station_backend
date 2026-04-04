import { Request, Response } from "express"
import { OrderServices } from "./order.service.js"

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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.getAllOrders();

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

const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const { status } = req.body;

        if (!id || !status) {
            return res.status(400).json({
                success: false,
                message: "id and status are required"
            });
        }

        const result = await OrderServices.updateOrderStatus(id, status as string);

        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to update order status",
            error: err.message || err
        });
    }
}

const deleteOrder = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "id is required"
            });
        }
        const result = await OrderServices.deleteOrder(id);

        res.status(200).json({
            success: true,
            message: "Order deleted successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to delete order",
            error: err.message || err
        });
    }
}

export const OrderController = {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
    deleteOrder,
}
