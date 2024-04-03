import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get product based on id
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no product is found, return a 404 response
        if (!product) {
            return new Response(JSON.stringify("Product not found"), { status: 404 });
        }

        // Transform product to a frontend friendly format
        const formatedProduct = {
            id: product.id,
            name: product.name,
            description: product.description,
            shopeeId: product.shopee_id,
            targetedStock: product.targeted_stock,
        };

        // Return the formated product
        return new Response(JSON.stringify(formatedProduct), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented, can't post new product by id"), { status: 501 });
}

export async function PUT(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get data from request
        const requestData = await req.json();

        // Update product based on id
        const updatedProduct = await prisma.product.update({
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
        return new Response(JSON.stringify(updatedProduct), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Delete product based on id
        const deletedProduct = await prisma.product.delete({
            where: {
                id: parseInt(id, 10)
            }
        });

        // Return the deleted product
        return new Response(JSON.stringify(deletedProduct), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
