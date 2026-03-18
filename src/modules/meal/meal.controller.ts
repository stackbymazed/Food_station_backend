import { Request, Response } from "express"
import { MealServices } from "./meal.service"

const createMeal = async (req: Request, res: Response) => {
    try {
        const result = await MealServices.createMeal(req.body);
        
        res.status(201).json({
            success: true,
            message: "Meal created successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create meal",
            error: err.message || err
        });
    }
}

const getAllMeals = async (req: Request, res: Response) => {
    try {
        const result = await MealServices.getAllMeals();
        
        res.status(200).json({
            success: true,
            message: "Meals fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meals",
            error: err.message || err
        });
    }
}

const getSingleMeal = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await MealServices.getSingleMeal(Number(id));
        
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Meal not found",
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meal",
            error: err.message || err
        });
    }
}

export const MealController = {
    createMeal,
    getAllMeals,
    getSingleMeal,
}