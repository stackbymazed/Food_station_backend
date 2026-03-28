import { prisma } from "../../lib/prisma.js"

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

const getAllOrders = async () => {
    const result = await prisma.order.findMany({
        include: {
            items: {
                include: {
                    meal: true
                }
            },
            user: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return result;
}

const updateOrderStatus = async (id: string, status: string) => {
    const result = await prisma.order.update({
        where: { id },
        data: { status: status as any }
    });
    return result;
}

export const OrderServices = {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
}
