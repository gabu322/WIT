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

        // Get productVariations based on where clause
        let productVariations = await prisma.product_variation.findMany({
            where: whereClause
        });

        // If no productVariations are found, return a 404 response
        if (!productVariations) {
            return new Response(JSON.stringify("Nenhuma variação encontrada"), { status: 404 });
        }

        // Map productVariations to a frontend friendly format
        productVariations = productVariations.map(variation => {
            return {
                id: variation.id,
                productId: variation.product_id,
                name: variation.name,
                price: variation.price,
                stock: variation.stock,
                buyPrice: variation.buy_price,
                sellPrice: variation.sell_price,
                buyLink: variation.buy_link,
                priorityWeight: variation.priority_weight,
            }
        });

        return new Response(JSON.stringify(productVariations), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error in productVariations with GET"), { status: 500 });
    }
}
