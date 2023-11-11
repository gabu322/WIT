import {prisma} from "@app/api/client";

export const GET = async (req, res) => {
    const { id } = await res.params;
    
    try {
        //find all
        const productVariations = await prisma.productVariations.findMany({
            where: {
                id: parseInt(id, 10),
            },
        });

        return new Response(JSON.stringify(productVariations), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify("Erro na requisição"), {status: 405})
    }
}
