import { prisma } from "@app/api/client";

export async function POST(req, res) {
    try {
        // Get body from request
        const body = await req.json();

        // Create a new order
        const order = await prisma.order.create({
            data: {
                date: body.date,
            }
        });

        // Return the new order
        return new Response(JSON.stringify(order), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Request error"), {status: 405});
    }
}

