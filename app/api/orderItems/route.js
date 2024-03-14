import { prisma } from "@app/api/client";

export async function POST(req, res) {
    try {
        const body = await req.json();

        const createdItems = await Promise.all(body.map(async (item) => {
            const createdItem = await prisma.orderItems.create({
                data: {
                    "Orders": {
                        connect: { id: parseInt(item.orderId, 10) }
                    },
                    productVariation: {
                        connect: { id: parseInt(item.variationId, 10) }
                    },
                    quantity: parseInt(item.quantity, 10),
                },
            });

            return createdItem;
        }));

        return new Response(JSON.stringify(createdItem), {
            status: 200
        });
    } catch (error) {
        return new Response(JSON.stringify("Erro na requisição"), {
            status: 405
        });
    }
}
