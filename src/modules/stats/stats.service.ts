import { prisma } from "../../lib/prisma.js";

const getAdminStats = async () => {
    // Basic stats
    const totalRevenue = await prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { NOT: { status: 'CANCELLED' } }
    });

    const totalOrders = await prisma.order.count();
    const totalUsers = await prisma.user.count();
    const totalMeals = await prisma.meal.count();

    // Daily Revenue (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailyStatsRaw = await prisma.order.groupBy({
        by: ['createdAt'],
        where: {
            createdAt: { gte: thirtyDaysAgo },
            NOT: { status: 'CANCELLED' }
        },
        _sum: { totalAmount: true }
    });

    // Process stats into date bucket
    const dailyRevenue = dailyStatsRaw.map(stat => ({
        date: stat.createdAt.toISOString().split('T')[0],
        revenue: stat._sum.totalAmount || 0
    }));

    // Top Categories
    const categoriesCount = await prisma.meal.groupBy({
        by: ['category'],
        _count: true
    });

    return {
        totalRevenue: totalRevenue._sum.totalAmount || 0,
        totalOrders,
        totalUsers,
        totalMeals,
        dailyRevenue,
        categoriesCount
    };
};

const getProviderStats = async (providerId: string) => {
    // Find all order items belonging to this provider
    const orderItems = await prisma.orderItem.findMany({
        where: {
            meal: { providerId: providerId },
            order: { NOT: { status: 'CANCELLED' } }
        },
        include: {
            order: true
        }
    });

    const providerRevenue = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const providerOrdersCount = new Set(orderItems.map(item => item.orderId)).size;
    const providerMealsCount = await prisma.meal.count({ where: { providerId } });

    // Performance over time (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 30);

    // Simplistic daily aggregation
    const dailyMap: Record<string, number> = {};
    orderItems.forEach(item => {
        const date = item.order.createdAt.toISOString().split('T')[0];
        if (new Date(date) >= sevenDaysAgo) {
            dailyMap[date] = (dailyMap[date] || 0) + (item.price * item.quantity);
        }
    });

    const dailyRevenue = Object.entries(dailyMap).map(([date, revenue]) => ({ date, revenue }))
        .sort((a, b) => a.date.localeCompare(b.date));

    return {
        providerRevenue,
        providerOrdersCount,
        providerMealsCount,
        dailyRevenue
    };
};

const getUserStats = async (userId: string) => {
    const userOrders = await prisma.order.findMany({
        where: { userId },
        include: { items: true }
    });

    const totalSpent = userOrders.reduce((acc, order) => acc + order.totalAmount, 0);
    const ordersCount = userOrders.length;

    // Spending over time
    const dailyMap: Record<string, number> = {};
    userOrders.forEach(order => {
        const date = order.createdAt.toISOString().split('T')[0];
        dailyMap[date] = (dailyMap[date] || 0) + order.totalAmount;
    });

    const dailySpending = Object.entries(dailyMap).map(([date, spent]) => ({ date, spent }))
        .sort((a, b) => a.date.localeCompare(b.date));

    return {
        totalSpent,
        ordersCount,
        dailySpending
    };
};

export const StatsServices = {
    getAdminStats,
    getProviderStats,
    getUserStats
};
