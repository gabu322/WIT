import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get products
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

        // Return the formatted products
        return new Response(JSON.stringify(formattedProducts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const products = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Create new products
        const newProducts = await prisma.$transaction(
            Promisse.all(products.map(product =>
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

        // Return the new product(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? newProducts
            : newProducts[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function PUT(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const products = Array.isArray(requestData)
            ? requestData
            : [requestData];

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

        // Return the updated product(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? updatedProducts
            : updatedProducts[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE() {
    return new Response(JSON.stringify("Safety: Can't delete all products"), { status: 405 });
};
