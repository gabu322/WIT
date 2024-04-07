import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get product images
        const images = await prisma.product_image.findMany();

        // Map images to a frontend friendly format
        const formattedImages = images.map(image => {
            return {
                id: image.id,
                productId: image.product_id,
                link: image.link,
            }
        });

        return new Response(JSON.stringify(formattedImages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const images = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Create a new image
        const newImages = await prisma.$transaction(
            images.map(image =>
                prisma.product_image.create({
                    data: {
                        product_id: parseInt(image.productId, 10),
                        link: image.link,
                    },
                })
            )
        );

        // Return the new image(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? newImages
            : newImages[0]
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
        const images = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Update images
        const updatedImages = await prisma.$transaction(
            images.map(image =>
                prisma.product_image.upsert({
                    where: {
                        id: image.id
                    },
                    update: {
                        product_id: parseInt(image.productId, 10),
                        link: image.link,
                    },
                    create: {
                        product_id: parseInt(image.productId, 10),
                        link: image.link,
                    }
                })
            )
        );

        // Return the updated image(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? updatedImages
            : updatedImages[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE(req, res) {
    return new Response(JSON.stringify("Not implemented, can't delete product images"), { status: 501 });
}
