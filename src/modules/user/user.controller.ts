import { Request, Response } from "express"
import { UserService } from "./user.service"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUsers();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
            error: err.message,
        });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await UserService.updateUser(id, req.body);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to update user",
            error: err.message,
        });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await UserService.deleteUser(id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
            error: err.message,
        });
    }
};

export const UserController = {
    getAllUsers,
    updateUser,
    deleteUser,
};
