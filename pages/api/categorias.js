import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true         // Para que se traiga los productos
        }                           // relacionados con esta categoria
    }) 
    res.status(200).json(categorias)
}
