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
            return new Response(JSON.stringify("Variation not found"), { status: 404 });
        }

        // Transform variation to a frontend friendly format
        const formattedVariation = {
            id: variation.id,
            name: variation.name,
            description: variation.description,
            shopeeId: variation.shopee_id,
            targetedStock: variation.targeted_stock,
        };

        // Return the formatted product
        return new Response(JSON.stringify(formattedVariation), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 500 });
    }
}

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented, can't post new variation by id"), { status: 501 });
}

export async function PUT(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get data from request
        const requestData = await req.json();

        // Update product based on id
        const updatedVariation = await prisma.product_variation.update({
            where: {
                id: parseInt(id, 10)
            },
            data: {
                name: requestData.name,
                description: requestData.description,
                shopee_id: requestData.shopeeId,
                targeted_stock: requestData.targetedStock,
            }
        });

        // Return the updated product
        return new Response(JSON.stringify(updatedVariation), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get product based on id
        const deletedVariation = await prisma.product_variation.delete({
            where: {
                id: parseInt(id, 10)
            }
        });

        // Return the deleted product
        return new Response(JSON.stringify(deletedVariation), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 500 });
    }
}
