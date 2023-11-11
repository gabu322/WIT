import { prisma } from "@app/api/client";


export async function GET(req, res) {
    const { id } = await res.params;
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: parseInt(id, 10),
            },
            include: {
                productVariations: true,
                productImages: true,
            },
        });

        return new Response(JSON.stringify(product), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 });
    }
};
