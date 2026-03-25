import { Request, Response } from "express";
export declare const MealController: {
    createMeal: (req: Request, res: Response) => Promise<void>;
    getAllMeals: (req: Request, res: Response) => Promise<void>;
    getSingleMeal: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=meal.controller.d.ts.map