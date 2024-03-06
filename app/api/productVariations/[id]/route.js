import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get product based on id
        const variation = await prisma.product_variation.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no variation is found, return a 404 response
        if (!variation) {
            return new Response(JSON.stringify("Variação não encontrada"), { status: 404 });
        }

        // Transform variation to a frontend friendly format
        const formatedVariation = {
            id: variation.id,
            name: variation.name,
            description: variation.description,
            shopeeId: variation.shopee_id,
            targetedStock: variation.targeted_stock,
        };

        // Return the formated product
        return new Response(JSON.stringify(formatedVariation), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 500 });
    }
}
