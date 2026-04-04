import { Request, Response } from "express"
import { StatsServices } from "./stats.service.js"

const getAdminStats = async (req: Request, res: Response) => {
    try {
        const result = await StatsServices.getAdminStats();

        res.status(200).json({
            success: true,
            message: "Admin stats fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch admin stats",
            error: err.message || err
        });
    }
}

const getProviderStats = async (req: Request, res: Response) => {
    try {
        const providerId = req.params.providerId as string;
        if (!providerId) {
            return res.status(400).json({
                success: false,
                message: "providerId is required"
            });
        }
        const result = await StatsServices.getProviderStats(providerId);

        res.status(200).json({
            success: true,
            message: "Provider stats fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch provider stats",
            error: err.message || err
        });
    }
}

const getUserStats = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId as string;
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "userId is required"
            });
        }
        const result = await StatsServices.getUserStats(userId);

        res.status(200).json({
            success: true,
            message: "User stats fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user stats",
            error: err.message || err
        });
    }
}

export const StatsController = {
    getAdminStats,
    getProviderStats,
    getUserStats
}
