export declare const OrderServices: {
    createOrder: (data: any) => Promise<{
        user: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
            image: string | null;
            email: string;
            emailVerified: boolean;
            role: string | null;
            status: string | null;
        };
        items: {
            price: number;
            id: string;
            mealId: number;
            orderId: string;
            quantity: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        totalAmount: number;
    }>;
    getUserOrders: (userId: string) => Promise<({
        items: ({
            meal: {
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
            };
        } & {
            price: number;
            id: string;
            mealId: number;
            orderId: string;
            quantity: number;
        })[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: string;
        userId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        totalAmount: number;
    })[]>;
};
//# sourceMappingURL=order.service.d.ts.map