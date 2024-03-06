import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get products
        const products = await prisma.product.findMany({});

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
};

export async function POST(req, res) {
    try {
        // Get body from request
        const body = await req.json();

        // Create a new product
        const product = await prisma.product.create({
            data: {
                name: body.name,
                description: body.description,
                shopee_id: body.shopeeId,
                targeted_stock: parseInt(body.targetedStock, 10),
            },
        });

        // Return the new product
        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 })
    }
};


export async function PUT(req, res) {
    try {
        // Get body from request
        const body = await req.json();

        // Check if the product exists
        if(!body.id) {
            // If the product doesn't exist, create it
            const newProduct = await prisma.product.create({
                data: {
                    name: body.name,
                    description: body.description,
                    shopee_id: body.shopeeId,
                    targeted_stock: body.targetedStock,
                },
            });

            // Return the new product
            return new Response(JSON.stringify(newProduct), { status: 200 });
        } else {
            // If the product exists, update it
            const updatedProduct = await prisma.product.update({
                where: {
                    id: parseInt(body.id, 10),
                },
                data: {
                    name: body.name,
                    description: body.description,
                    shopee_id: body.shopeeId,
                    targeted_stock: parseInt(body.targetedStock),
                },
            });

            // Return the updated product
            return new Response(JSON.stringify(updatedProduct), { status: 200 });
        }
    } catch (error) {
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 });
    }
};
