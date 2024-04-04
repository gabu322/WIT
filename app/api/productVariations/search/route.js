import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            product_id: parseInt(searchParams.get('productId'), 10) || undefined,
            name: searchParams.get('name') || undefined,
        };

        // Get product variations
        const productVariations = await prisma.product_variation.findMany({
            where: whereClause
        });

        // Map productVariations to a frontend friendly format
        const formattedVariations = productVariations.map(variation => {
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

        return new Response(JSON.stringify(formattedVariations), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
}

export async function PUT(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
}

export async function DELETE(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            product_id: parseInt(searchParams.get('productId'), 10) || undefined,
            name: searchParams.get('name') || undefined,
        };

        // Get product variations based on where clause
        const deletedVariations = await prisma.product_variation.deleteMany({
            where: whereClause
        });

        return new Response(JSON.stringify(deletedVariations), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
