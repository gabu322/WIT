import { prisma } from "@app/api/client";

export async function POST(req, res) {
    try {
        const body = await req.json();

        const createdImages = await Promise.all(body.map(async (image) => {
            const createdImage = await prisma.productImages.create({
                data: {
                    productId: parseInt(image.productId, 10),
                    link: image.link,
                },
            });

            return createdImage;
        }));

        return new Response(JSON.stringify("Images created", createdImages), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Request error"), {
            status: 405
        });
    }
}

export async function PUT(req, res) {
    try {
        const body = await req.json();

        const updatedImages = await Promise.all(body.map(async (image) => {
            const existingRecord = await prisma.productImages.findUnique({
                where: {
                    id: parseInt(image.id, 10),
                },
            });

            if (!existingRecord) {
                const createdImage = await prisma.productImages.create({
                    data: {
                        productId: parseInt(image.productId, 10),
                        link: image.link,
                    },
                });

                return createdImage;
            }

            // Update the existing record
            const updatedImage = await prisma.productImages.update({
                where: {
                    id: parseInt(image.id, 10),
                },
                data: {
                    id: parseInt(image.id, 10),
                    productId: parseInt(image.productId, 10),
                    link: image.link,
                },
            });

            return updatedImage;
        }));

        return new Response(JSON.stringify("Update successful", updatedImages), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Request error"), {
            status: 405
        });
    }
}
