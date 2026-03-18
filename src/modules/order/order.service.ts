import { prisma } from "../../lib/prisma"

const createOrder = async (data: any) => {
    const { items, ...orderData } = data;

    // Build the Prisma query payload
    const prismaData: any = {
        ...orderData,
    };

    if (items && Array.isArray(items) && items.length > 0) {
        prismaData.items = {
            create: items,
        };
    }

    const result = await prisma.order.create({
        data: prismaData,
        include: {
            items: true,
            user: true,
        }
    });

    return result;
}

const getUserOrders = async (userId: string) => {
    const result = await prisma.order.findMany({
        where: {
            userId,
        },
        include: {
            items: {
                include: {
                    meal: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return result;
}

export const OrderServices = {
    createOrder,
    getUserOrders,
}
