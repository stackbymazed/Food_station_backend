import { prisma } from "../../lib/prisma"

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface GetAllMealsQuery {
    searchTerm?: string;
    sortBy?: "priceLowToHigh" | "priceHighToLow" | "topRated" | "newest" | string;
    page?: string | number;
    limit?: string | number;
}

// ─────────────────────────────────────────────
// Create Meal
// ─────────────────────────────────────────────
const createMeal = async (data: any) => {
    const { options, images, ...mealData } = data;

    const prismaData: any = { ...mealData };

    if (options && Array.isArray(options) && options.length > 0) {
        prismaData.options = { create: options };
    }

    if (images && Array.isArray(images) && images.length > 0) {
        prismaData.images = {
            create: images.map((img: any) => ({
                image: img.image || img,
            })),
        };
    }

    const result = await prisma.meal.create({
        data: prismaData,
        include: { options: true, images: true },
    });

    return result;
};

// ─────────────────────────────────────────────
// Get All Meals (Search + Sort + Pagination)
// ─────────────────────────────────────────────
const getAllMeals = async (query: GetAllMealsQuery) => {
    const {
        searchTerm = "",
        sortBy = "newest",
        page = 1,
        limit = 8,
    } = query;

    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.min(Math.max(1, Number(limit)), 50);
    const skip = (pageNum - 1) * limitNum;

    console.log(`[GET MEALS] search: "${searchTerm}", sort: "${sortBy}", page: ${pageNum}`);

    // ─── 🔍 Search ───────────────────────────
    // Search across: name, category, shortDescription
    const trimmed = searchTerm.trim();

    const whereCondition: any = trimmed
        ? {
            OR: [
                {
                    name: {
                        contains: trimmed,
                        mode: "insensitive",
                    },
                },
                {
                    category: {
                        // Prisma enum filter via string cast
                        in: Object.values({
                            BURGER: "BURGER",
                            CHICKEN: "CHICKEN",
                            PIZZA: "PIZZA",
                            DESSERTS: "DESSERTS",
                        }).filter((cat) =>
                            cat.toLowerCase().includes(trimmed.toLowerCase())
                        ),
                    },
                },
                {
                    shortDescription: {
                        contains: trimmed,
                        mode: "insensitive",
                    },
                },
            ],
        }
        : {};

    // ─── 🔽 Sort ─────────────────────────────
    let orderBy: any;

    const sortKey = (sortBy || "newest").trim();

    switch (sortKey) {
        case "priceLowToHigh":
            orderBy = { price: "asc" };
            break;
        case "priceHighToLow":
            orderBy = { price: "desc" };
            break;
        case "topRated":
            orderBy = { rating: "desc" };
            break;
        case "newest":
        default:
            orderBy = { createdAt: "desc" };
            break;
    }

    // ─── 📄 Fetch ─────────────────────────────
    const [result, total] = await Promise.all([
        prisma.meal.findMany({
            where: whereCondition,
            orderBy,
            skip,
            take: limitNum,
            include: {
                options: true,
                images: true,
                reviews: true,
            },
        }),
        prisma.meal.count({ where: whereCondition }),
    ]);

    return {
        meta: {
            total,
            page: pageNum,
            limit: limitNum,
            totalPage: Math.ceil(total / limitNum),
        },
        data: result,
    };
};

// ─────────────────────────────────────────────
// Get Single Meal
// ─────────────────────────────────────────────
const getSingleMeal = async (id: number) => {
    const result = await prisma.meal.findUnique({
        where: { id },
        include: {
            options: true,
            images: true,
            reviews: true,
        },
    });

    return result;
};

export const MealServices = {
    createMeal,
    getAllMeals,
    getSingleMeal,
};