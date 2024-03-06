'use client';

import Button from "@components/Button";
import Carrousel from "@components/Carrousel";


const calculateColor = (stock, expectedStock = 100) => {
    return `hsl(${(stock / expectedStock) * 100}, 90%, 45%)`;
};

export default function Products({ product }) {
    // const samePrice = product.productVariations.every((variation) => {
    //     return variation.sellPrice == product.productVariations[0].sellPrice;
    // });


    const totalPercentage = product.productVariations?.reduce((sum, variation) => {
        const { stock, expectedStock } = variation;
        const percentage = (stock / expectedStock) * 100 / product.productVariations.length;

        return sum + percentage;
    }, 0);



    const images = (product.productImages?.map((image) => {
        return image.link;
    }).filter((link) => link));

    return <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100 relative" style={{
        backgroundColor: "white",
        height: "400px"
    }}>
        <div className="w-full h-1/2">
            <Carrousel images={images}></Carrousel>
        </div>
        <div className="w-full h-1/2 flex flex-col p-4 justify-between">
            <div className="w-full flex flex-col">
                <h3 className="font-bold">{product.name.split(" - ")[0]}</h3>
                <div>Avarage stock: <b style={{ color: calculateColor(totalPercentage?.toFixed()) }}>{totalPercentage?.toFixed()}%</b></div>
            </div>

            <div className="flex flex-row justify-between w-full gap-4">
                <Button href={"/products/" + product.id} color="green" className={"flex-grow"}>Visualizar</Button>
                <Button href={"/products/" + product.id} className={"flex-grow"}>Editar</Button>
            </div>

        </div>

    </div>
};
