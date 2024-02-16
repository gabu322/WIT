import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get productImage based on id
        const productImage = await prisma.productImages.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no productImage is found, return a 404 response
        if (!productImage) {
            return new Response(JSON.stringify("Imagem não encontrada"), { status: 404 });
        }

        // Transform productImage to a frontend friendly format
        const formatedProductImage = {
            id: productImage.id,
            productId: productImage.product_id,
            link: productImage.link,
        };

        // Return the formated productImage
        return new Response(JSON.stringify(formatedProductImage), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error in productImages with GET"), { status: 500 });
    }
}
