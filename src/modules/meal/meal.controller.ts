import { Request, Response } from "express"
import { MealServices } from "./meal.service"

// ─────────────────────────────────────────────
// POST /meal  →  Create a new meal
// ─────────────────────────────────────────────
const createMeal = async (req: Request, res: Response) => {
    try {
        const result = await MealServices.createMeal(req.body);

        res.status(201).json({
            success: true,
            message: "Meal created successfully",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create meal",
            error: err.message || err,
        });
    }
};

// ─────────────────────────────────────────────
// GET /meal  →  Search + Sort + Paginate
// Query params:
//   searchTerm  string   – search by name / category / description
//   sortBy      string   – priceLowToHigh | priceHighToLow | topRated | newest
//   page        number   – default 1
//   limit       number   – default 8 (max 50)
// ─────────────────────────────────────────────
const getAllMeals = async (req: Request, res: Response) => {
    try {
        const { searchTerm = "", sortBy = "newest", page = "1", limit = "8" } = req.query as {
            searchTerm?: string;
            sortBy?: string;
            page?: string;
            limit?: string;
        };

        const result = await MealServices.getAllMeals({
            searchTerm,
            sortBy,
            page,
            limit,
        });

        res.status(200).json({
            success: true,
            message: "Meals fetched successfully",
            meta: result.meta,
            data: result.data,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meals",
            error: err.message || err,
        });
    }
};

// ─────────────────────────────────────────────
// GET /meal/:id  →  Single meal by ID
// ─────────────────────────────────────────────
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
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meal",
            error: err.message || err,
        });
    }
};

export const MealController = {
    createMeal,
    getAllMeals,
    getSingleMeal,
};