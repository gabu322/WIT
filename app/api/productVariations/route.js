import { prisma } from "@app/api/client";


export async function GET(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;

        // Set where clause
        let whereClause = {};
        if (searchParams.get('id')) {
            whereClause.id = parseInt(searchParams.get('id'), 10);
        }
        if (searchParams.get('productId')) {
            whereClause.product_id = parseInt(searchParams.get('productId'), 10);
        }

        // Get productVariations based on where clause
        let productVariations;
        if (Object.keys(whereClause).length > 0) {
            productVariations = await prisma.product_variations.findMany({ where: whereClause });
        } else {
            productVariations = await prisma.product_variations.findMany();
        }

        // If no productVariations are found, return a 404 response
        if (!productVariations) {
            return new Response(JSON.stringify("Nenhuma variação encontrada"), { status: 404 });
        }

        // Map productVariations to a frontend friendly format
        productVariations = productVariations.map(variation => {
            return {
                id: variation.id,
                productId: variation.product_id,
                name: variation.name,
                stock: variation.stock,
                buyPrice: variation.buy_price,
                sellPrice: variation.sell_price,
                imageLink: variation.image_link,
                priorityWeight: variation.priority_weight,
            }
        });

        return new Response(JSON.stringify(productVariations), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error in productVariations with GET"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            // If it's an array, create each variation separately
            const createdVariations = await Promise.all(body.map(async (variation) => {
                const createdVariation = await prisma.product_variations.create({
                    data: {
                        product_id: parseInt(variation.productId, 10),
                        name: variation.name,
                        stock: parseInt(variation.stock, 10),
                        buy_price: parseFloat(variation.buyPrice),
                        sell_price: parseFloat(variation.sellPrice),
                        image_link: variation.imageLink,
                        priority_weight: parseInt(variation.priorityWeight, 10),
                    },
                });

                return createdVariation;
            }));

            return new Response(JSON.stringify(createdVariations), { status: 200 });
        } else {
            // If it's a single variation, create it directly
            const createdVariation = await prisma.product_variations.create({
                data: {
                    product_id: parseInt(body.productId, 10),
                    name: body.name,
                    stock: parseInt(body.stock, 10),
                    buy_price: parseFloat(body.buyPrice),
                    sell_price: parseFloat(body.sellPrice),
                    image_link: body.imageLink,
                    priority_weight: parseInt(body.priorityWeight, 10),
                },
            });

            return new Response(JSON.stringify(createdVariation), { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Request error"), { status: 405 });
    }
}

export async function PUT(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            // If it's an array, update each variation separately
            const updatedVariations = await Promise.all(body.map(async (variation) => {
                // Check if the variation has an id
                if (!variation.id) {
                    // If it doesn't, create a new variation
                    const createdVariation = await prisma.product_variations.create({
                        data: {
                            product_id: parseInt(variation.productId, 10),
                            name: variation.name,
                            stock: parseInt(variation.stock, 10),
                            buy_price: parseFloat(variation.buyPrice),
                            sell_price: parseFloat(variation.sellPrice),
                            image_link: variation.imageLink,
                            priority_weight: parseInt(variation.priorityWeight, 10),
                        },
                    });
                    return createdVariation;

                } else {
                    // If it does, update the variation
                    const updatedVariation = await prisma.product_variations.update({
                        where: {
                            id: parseInt(variation.id, 10),
                        },
                        data: {
                            product_id: parseInt(variation.productId, 10),
                            name: variation.name,
                            stock: parseInt(variation.stock, 10),
                            buy_price: parseFloat(variation.buyPrice),
                            sell_price: parseFloat(variation.sellPrice),
                            image_link: variation.imageLink,
                            priority_weight: parseInt(variation.priorityWeight, 10),
                        },
                    });
                    return updatedVariation;
                }
            }));

            return new Response(JSON.stringify(updatedVariations), { status: 200 });
        } else { // If it's a single variation, update it directly

            // Check if the variation has an id
            if (!body.id) {
                // If it doesn't, create a new variation
                const createdVariation = await prisma.product_variations.create({
                    data: {
                        product_id: parseInt(body.productId, 10),
                        name: body.name,
                        stock: parseInt(body.stock, 10),
                        buy_price: parseFloat(body.buyPrice),
                        sell_price: parseFloat(body.sellPrice),
                        image_link: body.imageLink,
                        priority_weight: parseInt(body.priorityWeight, 10),
                    },
                });
                return new Response(JSON.stringify(createdVariation), { status: 200 });
            } else {
                // If it does, update the variation
                const updatedVariation = await prisma.product_variations.update({
                    where: {
                        id: parseInt(body.id, 10),
                    },
                    data: {
                        product_id: parseInt(body.productId, 10),
                        name: body.name,
                        stock: parseInt(body.stock, 10),
                        buy_price: parseFloat(body.buyPrice),
                        sell_price: parseFloat(body.sellPrice),
                        image_link: body.imageLink,
                        priority_weight: parseInt(body.priorityWeight, 10),
                    },
                });
                return new Response(JSON.stringify(updatedVariation), { status: 200 });
            }
        }
    } catch (error) {
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 });
    }
};

export async function DELETE(req, res) {
    try {
        const body = await req.json();

        // Check if the body is an array
        if (Array.isArray(body)) {
            // If it's an array, delete each variation separately
            const deletedVariations = await Promise.all(body.map(async (variation) => {
                const deletedVariation = await prisma.product_variations.delete({
                    where: {
                        id: parseInt(variation.id, 10),
                    },
                });

                return deletedVariation;
            }));

            return new Response(JSON.stringify(deletedVariations), { status: 200 });
        } else { // If it's a single variation, delete it directly
            const deletedVariation = await prisma.product_variations.delete({
                where: {
                    id: parseInt(body.id, 10),
                },
            });

            return new Response(JSON.stringify(deletedVariation), { status: 200 });
        }
    } catch (error) {
        return new Response(JSON.stringify("Request error"), { status: 405 });
    }
}
