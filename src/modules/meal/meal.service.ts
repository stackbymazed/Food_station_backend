import { prisma } from "../../lib/prisma"

const createMeal = async (data: any) => {
    // Extract relations from the incoming data
    const { options, images, ...mealData } = data;

    // Build Prisma query payload
    const prismaData: any = {
        ...mealData,
    };

    // If options are provided, add them using a nested create
    if (options && Array.isArray(options) && options.length > 0) {
        prismaData.options = {
            create: options,
        };
    }

    // If images are provided, add them using a nested create
    if (images && Array.isArray(images) && images.length > 0) {
        prismaData.images = {
            create: images.map((img: any) => ({
                image: img.image || img
            })),
        };
    }

    // Insert into DB with associated relations
    const result = await prisma.meal.create({
        data: prismaData,
        include: {
            options: true,
            images: true,
        }
    });

    return result;
}

const getAllMeals = async (query: any) => {
    const {
        searchTerm,
        sortBy = "createdAt",
        sortOrder = "desc",
        page = 1,
        limit = 8,
    } = query;

    const skip = (Number(page) - 1) * Number(limit);

    // 🔍 Search condition
    const whereCondition: any = searchTerm
        ? {
            OR: [
                {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    category: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
            ],
        }
        : {};

    // 🔽 Sorting
    let orderBy: any = {};

    if (sortBy === "priceLowToHigh") {
        orderBy = { price: "asc" };
    } else if (sortBy === "priceHighToLow") {
        orderBy = { price: "desc" };
    } else if (sortBy === "topRated") {
        orderBy = { rating: "desc" };
    } else {
        orderBy = { createdAt: "desc" };
    }

    // 📄 Query
    const result = await prisma.meal.findMany({
        where: whereCondition,
        orderBy,
        skip,
        take: Number(limit),
        include: {
            options: true,
            images: true,
            reviews: true,
        },
    });

    // 📊 Total count (pagination)
    const total = await prisma.meal.count({
        where: whereCondition,
    });

    return {
        meta: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPage: Math.ceil(total / Number(limit)),
        },
        data: result,
    };
};

const getSingleMeal = async (id: number) => {
    const result = await prisma.meal.findUnique({
        where: {
            id,
        },
        include: {
            options: true,
            images: true,
            reviews: true
        }
    });

    return result;
}

export const MealServices = {
    createMeal,
    getAllMeals,
    getSingleMeal,
}