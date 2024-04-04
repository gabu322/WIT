import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get order based on id
        const order = await prisma.order.findUnique({
            where: {
                id: parseInt(id, 10)
            }
        });

        // If no order is found, return a 404 response
        if (!order) {
            return new Response(JSON.stringify("Order not found"), { status: 404 });
        }

        // Transform order to a frontend friendly format
        const formattedOrder = {
            id: order.id,
            date: order.date,
        };

        // Return the formatted order
        return new Response(JSON.stringify(formattedOrder), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented, can't post new order by id"), { status: 501 });
};

export async function PUT(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Get data from request
        const requestData = await req.json();

        // Update order based on id
        const updatedOrder = await prisma.order.update({
            where: {
                id: parseInt(id, 10)
            },
            data: {
                date: requestData.date,
            }
        });

        // Return the updated order
        return new Response(JSON.stringify(updatedOrder), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE(req, res) {
    try {
        // Get id from params
        const { id } = res.params;

        // Delete order based on id
        const deletedOrder = await prisma.order.delete({
            where: {
                id: parseInt(id, 10)
            }
        });

        // Return the deleted order
        return new Response(JSON.stringify(deletedOrder), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
