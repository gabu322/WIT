import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        let products;
        if (res.params) {
            const { id } = res.params;

            products = await prisma.products.findUnique({
                where: {
                    id: parseInt(id, 10),
                },
                include: {
                    productVariations: true,
                    productImages: true,
                },
            });

            if (!products) {
                return new Response(JSON.stringify("Product not found"), { status: 404 });
            }
        } else {
            products = await prisma.products.findMany({
                include: {
                    productVariations: true,
                    productImages: true,
                },
            })
        }
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
};

export async function POST(req, res) {
    try {
        const body = await req.json();

        const product = await prisma.products.create({
            data: {
                name: body.name,
                description: body.description,
                link: body.link,
                shopeeId: body.shopeeId,
            },
        });

        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 })
    }
};

export async function PUT(req, res) {
    try {
        const body = await req.json();

        const product = await prisma.products.update({
            where: {
                id: parseInt(body.id, 10),
            },
            data: {
                id: parseInt(body.id, 10),
                name: body.name,
                description: body.description,
                link: body.link,
                shopeeId: body.shopeeId,
            },
        });

        return new Response(JSON.stringify(product), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 })
    }
}

