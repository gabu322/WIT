import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;

        // Set where clause
        let whereClause = {};
        if (searchParams.get('id')) {
            whereClause.id = parseInt(searchParams.get('id'), 10);
        }
        if (searchParams.get('productId')) {
            whereClause.product_id = parseInt(searchParams.get('productId'), 10);
        }

        // Get productImages based on where clause
        let productImages = await prisma.product_image.findMany({
            where: whereClause
        });


        // If no productImages are found, return a 404 response
        if (!productImages) {
            return new Response(JSON.stringify("Nenhuma imagem encontrada"), { status: 404 });
        }

        // Map productImages to a frontend friendly format
        productImages = productImages.map(image => {
            return {
                id: image.id,
                productId: image.product_id,
                imageLink: image.image_link,
            }
        });

        return new Response(JSON.stringify(productImages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error in productImages with GET"), { status: 500 });
    }
}
