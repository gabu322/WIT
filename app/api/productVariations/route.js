import { prisma } from "@app/api/client";


export async function GET(req, res) {
    try {
        // Get product variations
        const variations = await prisma.product_variation.findMany();

        // Map variations to a frontend friendly format
        const formattedVariations = variations.map(variation => {
            return {
                id: variation.id,
                productId: variation.product_id,
                name: variation.name,
                stock: variation.stock,
                buyPrice: variation.buy_price,
                sellPrice: variation.sell_price,
                imageLink: variation.image_link,
                priorityWeight: variation.priority_weight,
            }
        });

        // Return the formatted productVariations
        return new Response(JSON.stringify(formattedVariations), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const variations = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Create a new variation
        const newVariations = await prisma.$transaction(
            variations.map(variation =>
                prisma.product_variation.create({
                    data: {
                        product_id: parseInt(variation.productId, 10),
                        name: variation.name,
                        stock: parseInt(variation.stock, 10),
                        buy_price: parseFloat(variation.buyPrice),
                        sell_price: parseFloat(variation.sellPrice),
                        buy_link: variation.buyLink,
                        image_link: variation.imageLink,
                        priority_weight: parseInt(variation.priorityWeight, 10),
                    },
                })
            )
        );

        // Return the new variation(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? newVariations
            : newVariations[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function PUT(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const variations = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Update each variation
        const updatedVariations = await prisma.$transaction(
            variations.map(variation =>
                prisma.product_variation.upsert({
                    where: {
                        id: parseInt(variation.id, 10),
                    },
                    update: {
                        product_id: parseInt(variation.productId, 10),
                        name: variation.name,
                        stock: parseInt(variation.stock, 10),
                        buy_price: parseFloat(variation.buyPrice),
                        sell_price: parseFloat(variation.sellPrice),
                        buy_link: variation.buyLink,
                        image_link: variation.imageLink,
                        priority_weight: parseInt(variation.priorityWeight, 10),
                    },
                    create: {
                        product_id: parseInt(variation.productId, 10),
                        name: variation.name,
                        stock: parseInt(variation.stock, 10),
                        buy_price: parseFloat(variation.buyPrice),
                        sell_price: parseFloat(variation.sellPrice),
                        buy_link: variation.buyLink,
                        image_link: variation.imageLink,
                        priority_weight: parseInt(variation.priorityWeight, 10),
                    },
                })
            )
        );

        // Return the updated variation(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? updatedVariations
            : updatedVariations[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE(req, res) {
    try {
        // Get body data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const variations = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Delete each variation
        const deletedVariations = await prisma.$transaction(
            variations.map(variation =>
                prisma.product_variation.delete({
                    where: {
                        id: parseInt(variation.id, 10),
                    },
                })
            )
        );

        // Return the deleted variation(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? deletedVariations
            : deletedVariations[0]
        ), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
