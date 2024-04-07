import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get order items
        const orderItems = await prisma.order_item.findMany({});

        // Map order items to a frontend friendly format
        const formattedOrderItems = orderItems.map(orderItem => {
            return {
                id: orderItem.id,
                orderId: orderItem.order_id,
                variationId: orderItem.product_variation_id,
                quantity: orderItem.quantity,
            }
        });

        // Return the formatted order items
        return new Response(JSON.stringify(formattedOrderItems), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const orderItems = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Create new order items
        const newOrderItems = await prisma.$transaction(
            orderItems.map(orderItem =>
                prisma.order_item.create({
                    data: {
                        order_id: orderItem.orderId,
                        product_variation_id: orderItem.variationId,
                        quantity: orderItem.quantity,
                    },
                })
            )
        );

        // Return the new order item(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? newOrderItems
            : newOrderItems[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function PUT(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const orderItems = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Update order items, or create new ones if they don't exist
        const updatedOrderItems = await prisma.$transaction(
            orderItems.map(orderItem =>
                prisma.order_item.upsert({
                    where: {
                        id: orderItem.id
                    },
                    update: {
                        order_id: orderItem.orderId,
                        product_variation_id: orderItem.variationId,
                        quantity: orderItem.quantity,
                    },
                    create: {
                        order_id: orderItem.orderId,
                        product_variation_id: orderItem.variationId,
                        quantity: orderItem.quantity,
                    }
                })
            )
        );

        // Return the updated order item(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? updatedOrderItems
            : updatedOrderItems[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};


export async function DELETE() {
    return new Response(JSON.stringify("Safety: Can't delete all order items"), { status: 405 });
};
