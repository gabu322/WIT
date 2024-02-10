import { prisma } from "@app/api/client";

export async function GET(req, res) {

    try {
        let products;

        const searchParams = req.nextUrl.searchParams;

        let whereClause = {};
        if (searchParams.get('id')) {
            whereClause.id = parseInt(searchParams.get('id'), 10);
        }
        if (searchParams.get('name')) {
            whereClause.name = searchParams.get('name');
        }
        if (Object.keys(whereClause).length > 0) {
            products = await prisma.product.findMany({
                where: whereClause,
            });
        } else {
            products = await prisma.product.findMany();
        }

        if (!products) {
            return new Response(JSON.stringify("Nenhum produto encontrado"), { status: 404 });
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

        const product = await prisma.product.create({
            data: {
                name: body.name,
                description: body.description,
                // link: body.link,
                shopee_id: body.shopeeId,
                targeted_stock: body.targetedStock,
                buy_link: body.buyLink,
            },
        });

        return new Response(JSON.stringify(product.id), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), { status: 405 })
    }
};

export async function PUT(req, res) {
    try {
        const body = await req.json();

        const product = await prisma.product.update({
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

