import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get productImage based on id
        const productImage = await prisma.product_image.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no productImage is found, return a 404 response
        if (!productImage) {
            return new Response(JSON.stringify("Image not found"), { status: 404 });
        }

        // Transform productImage to a frontend friendly format
        const formattedProductImage = {
            id: productImage.id,
            productId: productImage.product_id,
            link: productImage.link,
        };

        // Return the formatted productImage
        return new Response(JSON.stringify(formattedProductImage), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented, can't post new productImage by id"), { status: 501 });
}

export async function PUT(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get data from request
        const requestData = await req.json();

        // Update productImage based on id
        const updatedProductImage = await prisma.product_image.update({
            where: {
                id: parseInt(id, 10)
            },
            data: {
                product_id: requestData.productId,
                link: requestData.link,
            }
        });

        return new Response(JSON.stringify(updatedProductImage), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get productImage based on id
        const deletedProductImage = await prisma.product_image.delete({
            where: {
                id: parseInt(id, 10)
            }
        });

        return new Response(JSON.stringify(deletedProductImage), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
