import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get order item based on id
        const orderItem = await prisma.order_item.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no order item is found, return a 404 response
        if (!orderItem) {
            return new Response(JSON.stringify("Order item not found"), { status: 404 });
        }

        // Transform order item to a frontend friendly format
        const formattedOrderItem = {
            id: orderItem.id,
            orderId: orderItem.order_id,
            variationId: orderItem.product_variation_id,
            quantity: orderItem.quantity,
        };

        // Return the formatted order item
        return new Response(JSON.stringify(formattedOrderItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented, can't post new order item by id"), { status: 501 });
};

export async function PUT(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get data from request
        const requestData = await req.json();

        // Update order item based on id
        const updatedOrderItem = await prisma.order_item.update({
            where: {
                id: parseInt(id, 10)
            },
            data: {
                order_id: requestData.orderId,
                product_variation_id: requestData.variationId,
                quantity: requestData.quantity,
            }
        });

        // Return the updated order item
        return new Response(JSON.stringify(updatedOrderItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Delete order item based on id
        await prisma.order_item.delete({
            where: {
                id: parseInt(id, 10)
            }
        });

        // Return the deleted order item
        return new Response(JSON.stringify("Order item deleted"), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
