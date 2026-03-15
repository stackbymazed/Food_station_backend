import { Request, Response } from "express"
import { Result } from "pg"
import { prisma } from "../../lib/prisma"

const createMeal = async (data:any) => {
    const Result = await prisma.post.create({
        data :{
            data
        }
    })
}

export  const MealServices = {
    createMeal,
}