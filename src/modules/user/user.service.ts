import { prisma } from "../../lib/prisma"

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

export const UserService = {
    getAllUsers,
    updateUser,
    deleteUser,
};
