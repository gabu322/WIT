import { prisma } from "@app/api/client";

export async function GET(req, res) {
    try {
        const searchParams = req.nextUrl.searchParams;

        // Set where clause
        let whereClause = {
            product_id: parseInt(searchParams.get('productId'), 10) || undefined,
            link: searchParams.get('link') || undefined,
        };

        // Get productImages based on where clause
        let productImages = await prisma.product_image.findMany({
            where: whereClause
        });

        // Map productImages to a frontend friendly format
        const formattedImages = productImages.map(image => {
            return {
                id: image.id,
                productId: image.product_id,
                link: image.link,
            }
        });

        return new Response(JSON.stringify(formattedImages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}

export async function POST(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
}

export async function PUT(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
}

export async function DELETE(req, res) {
    return new Response(JSON.stringify("Not implemented"), { status: 501 });
    try {
        const searchParams = req.nextUrl.searchParams;

        // Set where clause
        let whereClause = {
            product_id: parseInt(searchParams.get('productId'), 10) || undefined,
            link: searchParams.get('link') || undefined,
        };

        // Get productImages based on where clause
        const deletedImages = await prisma.product_image.deleteMany({
            where: whereClause
        });

        return new Response(JSON.stringify(deletedImages), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify("Error in request"), { status: 500 });
    }
}
