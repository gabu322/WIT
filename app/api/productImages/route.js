import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;
        //Set where clause
        let whereClause = {};
        if (searchParams.get('id')) {
            whereClause.id = searchParams.get('id'), 10;
        }
        if (searchParams.get('productId')) {
            whereClause.product_id = parseInt(searchParams.get('productId'), 10);
        }

        //Get productImages based on where clause
        let productImages;
        if (Object.keys(whereClause).length > 0) {
            productImages = await prisma.product_image.findMany({ where: whereClause });
        } else {
            productImages = await prisma.product_image.findMany();
        }

        //If no productImages are found, return a 404 response
        if (!productImages) {
            return new Response(JSON.stringify("No images found"), { status: 404 });
        }

        //Map productImages to a frontend friendly format
        productImages = productImages.map(image => {
            return {
                id: image.id,
                productId: image.product_id,
                link: image.link,
            }
        });

        return new Response(JSON.stringify(productImages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error in productImages with GET"), { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            // If it's an array, create each image separately
            const createdImages = await Promise.all(body.map(async (image) => {
                const createdImage = await prisma.product_image.create({
                    data: {
                        product_id: parseInt(image.productId, 10),
                        link: image.link,
                    },
                });

                return createdImage;
            }));

            return new Response(JSON.stringify("Images created", createdImages), {
                status: 200
            });
        } else {
            // If it's a single image, create it directly
            const createdImage = await prisma.product_image.create({
                data: {
                    product_id: parseInt(body.productId, 10),
                    link: body.link,
                },
            });

            return new Response(JSON.stringify("Image created", createdImage), { status: 200 });
        }
    }
    catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 405 });
    }
}

export async function PUT(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            const updatedImages = await Promise.all(body.map(async (image) => {
                // Check if the image has an id
                if (!image.id) {
                    // If it doesn't, create a new image
                    const createdImage = await prisma.product_image.create({
                        data: {
                            product_id: parseInt(image.productId, 10),
                            link: image.link,
                        },
                    });
                    return createdImage;

                } else {
                    // If it does, update the image
                    const updatedImage = await prisma.product_image.update({
                        where: {
                            id: parseInt(image.id, 10),
                        },
                        data: {
                            product_id: parseInt(image.productId, 10),
                            link: image.link,
                        },
                    });
                    return updatedImage;
                }
            }))

            return new Response(JSON.stringify("Update successful", updatedImages), { status: 200 });
        } else { // If it's a single image, update it directly

            // Check if the image has an id
            if (!body.id) {
                // If it doesn't, create a new image
                const createdImage = await prisma.product_image.create({
                    data: {
                        product_id: parseInt(body.productId, 10),
                        link: body.link,
                    },
                });

                return new Response(JSON.stringify("Image created", createdImage), { status: 200 });
            } else {
                // If it does, update the image
                const updatedImage = await prisma.product_image.update({
                    where: {
                        id: parseInt(body.id, 10),
                    },
                    data: {
                        id: parseInt(body.id, 10),
                        product_id: parseInt(body.productId, 10),
                        link: body.link,
                    },
                });

                return new Response(JSON.stringify("Update successful", updatedImage), { status: 200 });
            }
        }
    }
    catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 405 });
    }
};

export async function DELETE(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            //If it's an array, delete each image separately
            const deletedImages = await Promise.all(body.map(async (image) => {
                const deletedImage = await prisma.product_image.delete({
                    where: {
                        id: parseInt(image.id, 10),
                    },
                });

                return deletedImage;
            }));

            return new Response(JSON.stringify("Images deleted", deletedImages), { status: 200 });
        } else {
            // If it's a single image, delete it directly
            const deletedImage = await prisma.product_image.delete({
                where: {
                    id: parseInt(body.id, 10),
                },
            });

            return new Response(JSON.stringify("Image deleted", deletedImage), { status: 200 });
        }
    }
    catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 405 });
    }
}
