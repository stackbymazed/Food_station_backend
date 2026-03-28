import { prisma } from "../../lib/prisma.js"

const getCart = async (userId: string) => {
    let cart = await prisma.cart.findUnique({
        where: { userId },
        include: {
            items: {
                include: {
                    meal: true
                }
            }
        }
    });

    if (!cart) {
        cart = await prisma.cart.create({
            data: {
                userId: userId
            },
            include: {
                items: {
                    include: {
                        meal: true
                    }
                }
            }
        });
    }

    return cart;
}

const addToCart = async (userId: string, mealId: number, quantity: number = 1) => {
    const cart = await getCart(userId);

    const existingItem = cart.items.find((item: any) => item.mealId === mealId);

    if (existingItem) {
        return await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + quantity }
        });
    } else {
        return await prisma.cartItem.create({
            data: {
                cartId: cart.id,
                mealId,
                quantity
            }
        });
    }
}

const updateCartItemQuantity = async (itemId: string, quantity: number) => {
    if (quantity <= 0) {
        return await prisma.cartItem.delete({
            where: { id: itemId }
        });
    }
    return await prisma.cartItem.update({
        where: { id: itemId },
        data: { quantity }
    });
}

const removeFromCart = async (itemId: string) => {
    return await prisma.cartItem.delete({
        where: { id: itemId }
    });
}

const clearCart = async (userId: string) => {
    const cart = await prisma.cart.findUnique({ where: { userId } });
    if (cart) {
        return await prisma.cartItem.deleteMany({
            where: { cartId: cart.id }
        });
    }
}

export const CartServices = {
    getCart,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart
}
