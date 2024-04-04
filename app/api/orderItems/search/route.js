import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            quantity: parseInt(searchParams.get('quantity'), 10) || undefined,
            product_variation_id: parseInt(searchParams.get('productVariationId'), 10) || undefined,
        };

        // Get order items based on where clause
        const orderItems = await prisma.order_item.findMany({
            where: whereClause
        });

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
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
};

export async function PUT(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
};

export async function DELETE(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
}
