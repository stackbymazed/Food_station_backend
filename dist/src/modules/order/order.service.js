import { prisma } from "../../lib/prisma";
const createOrder = async (data) => {
    const { items, ...orderData } = data;
    // Build the Prisma query payload
    const prismaData = {
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
};
const getUserOrders = async (userId) => {
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
};
export const OrderServices = {
    createOrder,
    getUserOrders,
};
//# sourceMappingURL=order.service.js.map