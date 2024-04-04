import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            name: searchParams.get('name') || undefined,
            shopee_id: parseInt(searchParams.get('shopeeId'), 10) || undefined,
        };

        // Get products based on where clause
        const products = await prisma.product.findMany({
            where: whereClause
        });

        // Map products to a frontend friendly format
        const formatedProducts = products.map(product => {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                shopeeId: product.shopee_id,
                targetedStock: product.targeted_stock,
            }
        });

        // Return the formated products
        return new Response(JSON.stringify(formatedProducts), { status: 200 });
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
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            name: searchParams.get('name') || undefined,
            shopee_id: parseInt(searchParams.get('shopeeId'), 10) || undefined,
        };

        // Get products based on where clause
        const deletedProducts = await prisma.product.findMany({
            where: whereClause
        });

        // Return the deleted product
        return new Response(JSON.stringify(deletedProducts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
