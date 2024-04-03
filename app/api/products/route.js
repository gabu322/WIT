import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get products with their variations and images
        const products = await prisma.product.findMany({});

        // Map products to a frontend friendly format
        const formattedProducts = products.map(product => {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                shopeeId: product.shopee_id,
                targetedStock: product.targeted_stock,
            }
        });

        // Return the formated products
        return new Response(JSON.stringify(formattedProducts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        let products;
        // Check if the data is a array
        if (!Array.isArray(requestData)) {
            // If the data is not an array, transform it into an array
            products = [requestData];
        };

        // Create a new product
        const newProducts = await prisma.$transaction(
            Promise.all(products.map(product =>
                prisma.product.create({
                    data: {
                        name: product.name,
                        description: product.description,
                        shopee_id: product.shopeeId,
                        targeted_stock: parseInt(product.targetedStock, 10),
                    },
                })
            ))
        );

        // Return the new product
        return new Response(JSON.stringify(newProducts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};


export async function PUT(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        let products;
        // Check if the data is a array
        if (!Array.isArray(requestData)) {
            // If the data is not an array, transform it into an array
            products = [requestData];
        };

        // Update products, or create new ones if they don't exist
        const updatedProducts = await prisma.$transaction(
            Promise.all(products.map(product =>
                prisma.product.upsert({
                    where: {
                        id: product.id
                    },
                    update: {
                        name: product.name,
                        description: product.description,
                        shopee_id: product.shopeeId,
                        targeted_stock: parseInt(product.targetedStock, 10),
                    },
                    create: {
                        name: product.name,
                        description: product.description,
                        shopee_id: product.shopeeId,
                        targeted_stock: parseInt(product.targetedStock, 10),
                    },
                })
            ))
        );

        // Return the updated products
        return new Response(JSON.stringify(updatedProducts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE(req, res) {
    return new Response(JSON.stringify("Safety: Can't delete all products"), { status: 405 });
}
