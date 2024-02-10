import { prisma } from "@app/api/client";

export async function POST(req, res) {
    try {
        const body = await req.json();

        const order = await prisma.order.create({
            data: {
                data: body.data,
            }
        });

        return new Response(JSON.stringify(order), { status: 200 });
    }
    catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Request error"), {
            status: 405
        });
    }
}

