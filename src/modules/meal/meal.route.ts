import express from "express"
import { MealController } from "./meal.controller"

const router = express.Router();

// Define route for creating a meal
router.post("/", MealController.createMeal);

router.get("/", MealController.getAllMealsController);
router.get("/:id", MealController.getSingleMeal);

export const MealRouter = router;