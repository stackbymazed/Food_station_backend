import { prisma } from "../../lib/prisma.js"
import { sendRoleUpdateEmail, sendStatusUpdateEmail } from "../../lib/nodemailer.js"

const getAllUsers = async () => {
    return await prisma.user.findMany({
        orderBy: { createdAt: "desc" },
    });
};

const updateUser = async (id: string, data: any) => {
    const result = await prisma.user.update({
        where: { id },
        data: data,
    });

    // If role is updated, send email
    if (data.role) {
        sendRoleUpdateEmail(result.email, result.name, data.role);
    }

    // If status is updated, send email
    if (data.status) {
        sendStatusUpdateEmail(result.email, result.name, data.status);
    }

    return result;
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
