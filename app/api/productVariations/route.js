import { prisma } from "@app/api/client";

export async function POST(req, res) {
    try {
        const body = await req.json();

        const createdVariations = await Promise.all(body.map(async (variation) => {
            const createdVariation = await prisma.productVariations.create({
                data: {
                    productId: parseInt(variation.productId, 10),
                    name: variation.name,
                    stock: parseInt(variation.stock, 10),
                    imageLink: variation.imageLink,
                    expectedStock: parseInt(variation.expectedStock, 10),
                    buyPrice: parseFloat(variation.buyPrice),
                    sellPrice: parseFloat(variation.sellPrice),
                    buyLink: variation.buyLink,
                    priorityWeight: parseInt(variation.priorityWeight, 10),
                },
            });

            return createdVariation;
        }));

        return new Response(JSON.stringify("Variações criadas", createdVariations), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), {
            status: 405
        });
    };
};

export async function PUT(req, res) {
    try {
        const body = await req.json();

        const updatedVariations = await Promise.all(body.map(async (variation) => {
            const existingRecord = await prisma.productVariations.findUnique({
                where: {
                    id: parseInt(variation.id, 10),
                },
            });

            if (!existingRecord) {
                const createdVariation = await prisma.productVariations.create({
                    data: {
                        productId: parseInt(variation.productId, 10),
                        name: variation.name,
                        stock: parseInt(variation.stock, 10),
                        imageLink: variation.imageLink,
                        expectedStock: parseInt(variation.expectedStock, 10),
                        buyPrice: parseFloat(variation.buyPrice),
                        sellPrice: parseFloat(variation.sellPrice),
                        buyLink: variation.buyLink,
                        priorityWeight: parseInt(variation.priorityWeight, 10),
                    },
                });

                return createdVariation;
            }

            // Update the existing record
            const updatedVariation = await prisma.productVariations.update({
                where: {
                    id: parseInt(variation.id, 10),
                },
                data: {
                    id: parseInt(variation.id, 10),
                    productId: parseInt(variation.productId, 10),
                    name: variation.name,
                    stock: parseInt(variation.stock, 10),
                    imageLink: variation.imageLink,
                    expectedStock: parseInt(variation.expectedStock, 10),
                    buyPrice: parseFloat(variation.buyPrice),
                    sellPrice: parseFloat(variation.sellPrice),
                    buyLink: variation.buyLink,
                    priorityWeight: parseInt(variation.priorityWeight, 10),
                },
            });

            return updatedVariation;
        }));

        return new Response(JSON.stringify("Atualização realizada", updatedVariations), {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), {
            status: 405
        });
    }
}
