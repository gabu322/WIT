import { prisma } from 'prisma/prisma-client';

export async function GET(req, res) {
    try {
        // Get search params
        const searchParams = req.nextUrl?.searchParams;

        // Set where clause
        let whereClause = {
            date: {
                gte: searchParams.get('startDate') || undefined,
                lte: searchParams.get('endDate') || undefined
            }
        };

        // Get orders based on where clause
        const orders = await prisma.order.findMany({
            where: whereClause
        });

        // Map orders to a frontend friendly format

        const formattedOrders = orders.map(order => {
            return {
                id: order.id,
                date: order.date,
            }
        }
        );

        // Return the formatted orders
        return new Response(JSON.stringify(formattedOrders), { status: 200 });
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
