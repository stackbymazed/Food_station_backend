interface GetAllMealsQuery {
    searchTerm?: string;
    sortBy?: "priceLowToHigh" | "priceHighToLow" | "topRated" | "newest" | string;
    page?: string | number;
    limit?: string | number;
}
export declare const MealServices: {
    createMeal: (data: any) => Promise<{
        options: {
            name: string;
            price: number;
            id: number;
            mealId: number;
            type: import("../../../generated/prisma/enums").OptionType;
        }[];
        images: {
            id: number;
            mealId: number;
            image: string;
        }[];
    } & {
        name: string;
        slug: string;
        category: import("../../../generated/prisma/enums").MealCategory;
        price: number;
        discountPrice: number | null;
        rating: number;
        reviewCount: number;
        shortDescription: string | null;
        description: string | null;
        mainImage: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    getAllMeals: (query: GetAllMealsQuery) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPage: number;
        };
        data: ({
            options: {
                name: string;
                price: number;
                id: number;
                mealId: number;
                type: import("../../../generated/prisma/enums").OptionType;
            }[];
            images: {
                id: number;
                mealId: number;
                image: string;
            }[];
            reviews: {
                rating: number;
                createdAt: Date;
                id: number;
                mealId: number;
                userId: number;
                comment: string | null;
            }[];
        } & {
            name: string;
            slug: string;
            category: import("../../../generated/prisma/enums").MealCategory;
            price: number;
            discountPrice: number | null;
            rating: number;
            reviewCount: number;
            shortDescription: string | null;
            description: string | null;
            mainImage: string | null;
            createdAt: Date;
            updatedAt: Date;
            id: number;
        })[];
    }>;
    getSingleMeal: (id: number) => Promise<({
        options: {
            name: string;
            price: number;
            id: number;
            mealId: number;
            type: import("../../../generated/prisma/enums").OptionType;
        }[];
        images: {
            id: number;
            mealId: number;
            image: string;
        }[];
        reviews: {
            rating: number;
            createdAt: Date;
            id: number;
            mealId: number;
            userId: number;
            comment: string | null;
        }[];
    } & {
        name: string;
        slug: string;
        category: import("../../../generated/prisma/enums").MealCategory;
        price: number;
        discountPrice: number | null;
        rating: number;
        reviewCount: number;
        shortDescription: string | null;
        description: string | null;
        mainImage: string | null;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }) | null>;
};
export {};
//# sourceMappingURL=meal.service.d.ts.map