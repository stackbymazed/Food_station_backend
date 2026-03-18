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

const getAllMeals = async () => {
    const result = await prisma.meal.findMany({
        include: {
            options: true,
            images: true,
            reviews: true
        }
    });

    return result;
}

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