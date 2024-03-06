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
            return new Response(JSON.stringify("Produto não encontrado"), { status: 404 });
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
        return new Response(JSON.stringify("Request error"), { status: 500 });
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
        return new Response(JSON.stringify("Request error"), { status: 500 });
    }
}
