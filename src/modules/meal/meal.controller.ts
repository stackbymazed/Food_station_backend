import { Request, Response } from "express"
import { MealServices } from "./meal.service"

const createMeal = async (req: Request, res: Response) => {
    try {
        const result = MealServices.createMeal(req: any)
        res.status(200).json(result)
    } catch (err) {
        res.status(200).json({
            "data" : "meal create failed"
        })
    }
}

export const MealController = {
    createMeal,
}