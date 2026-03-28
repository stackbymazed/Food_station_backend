import { prisma } from "../../lib/prisma.js"

const getAllUsers = async () => {
    return await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });
};

const updateUser = async (id: string, data: any) => {
    return await prisma.user.update({
        where: { id },
        data: data,
    });
};

const deleteUser = async (id: string) => {
    return await prisma.user.delete({
        where: { id }
    });
};

const getProviders = async () => {
    return await prisma.user.findMany({
        where: { role: "provider" },
        orderBy: { createdAt: "desc" },
    });
};

export const UserService = {
    getAllUsers,
    getProviders,
    updateUser,
    deleteUser,
};
