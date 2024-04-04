import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        // Get orders
        const orders = await prisma.order.findMany({});

        // Map orders to a frontend friendly format
        const formattedOrders = orders.map(order => {
            return {
                id: order.id,
                date: order.date,
            }
        });

        // Return the formatted orders
        return new Response(JSON.stringify(formattedOrders), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        // Get data from request
        const requestData = await req.json();

        // Ensure the data is an array
        const orders = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Create new orders
        const newOrders = await prisma.$transaction(
            Promise.all(orders.map(order =>
                prisma.order.create({
                    data: {
                        date: order.date,
                    },
                })
            ))
        );

        // Return the new order(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? newOrders
            : newOrders[0]
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
        const orders = Array.isArray(requestData)
            ? requestData
            : [requestData];

        // Update orders or create new ones if they don't exist
        const updatedOrders = await prisma.$transaction(
            Promise.all(orders.map(order =>
                prisma.order.upsert({
                    where: {
                        id: order.id
                    },
                    update: {
                        date: order.date,
                    },
                    create: {
                        date: order.date,
                    }
                })
            ))
        );

        // Return the updated order(s), ensuring the response is the same format as the request
        return new Response(JSON.stringify(Array.isArray(requestData)
            ? updatedOrders
            : updatedOrders[0]
        ), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function DELETE() {
    return new Response(JSON.stringify("Safety: Can't delete all products"), { status: 405 });
};
