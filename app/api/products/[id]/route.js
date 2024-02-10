import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        const { id } = res.params;

        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id, 10),
            },
        });

        if (!product) {
            return new Response(JSON.stringify("Product not found"), { status: 404 });
        }
        return new Response(JSON.stringify(product), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

