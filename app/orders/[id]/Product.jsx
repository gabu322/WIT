// ProductItem.js

import React from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import Carrousel from "@components/Carrousel";

export default function ProductItem({
    product,
    index,
    Order,
    setOrder,
    products,
    setProducts
}) {
    const productInfo = products.find((p) => p.id === Order[index].productId);
    // const stock = productInfo?.productVariations?.find((v) => v.id == Order[index].variations[vIndex].variationId)?.stock;


    return <div className="shadow-xl rounded-lg overflow-hidden border border-gray-100 relative min-h-max" key={Order[index].productId} >
        {/* <div className="w-full h-0/2">

            <Carrousel images={productInfo.productImages.map((image) => image.link)}></Carrousel>
        </div> */}
        <div className='flex-c-4 p-4'>

            <h3>{productInfo.name.split(" - ")[0]}</h3>



            <div className='flex-c-4'>
                {Order[index].variations.map((variation, vIndex) => {
                    const stock = productInfo?.productVariations?.find((v) => v.id == variation.variationId)?.stock || 0;
                    return <div key={vIndex} className="flex-r-4">
                        <Input id={`filter-${product.productId}-${vIndex}`}
                        required
                            label='Variação'
                            options={productInfo.productVariations.map((v) => {

                                if (v.stock <= 0) v.disabled = true;
                                return v
                            })}
                            size="sm"
                            onChange={(e) => {
                                let newOrder = [...Order];
                                if (newOrder[index].variations[vIndex].variationId != 0) {
                                    const oldVariation = productInfo.productVariations.find((v) => v.id == newOrder[index].variations[vIndex].variationId);
                                    oldVariation.disabled = false;
                                }

                                const variation = productInfo.productVariations.find((v) => v.id == e.target.value);
                                variation.disabled = true;

                                newOrder[index].variations[vIndex].variationId = (+e.target.value); //+ is to transform into INT

                                setOrder(newOrder);
                            }}
                        />
                        <Input type='number'
                            disabled={(stock > 0) ? false : true}
                            required
                            size="sm"
                            label={'Qtd (/' + (stock) + ')'}
                            onChange={(e) => {
                                let newOrder = [...Order];
                                newOrder[index].variations[vIndex].quantity = e.target.value;
                                setOrder(newOrder);
                            }}
                        />

                        <Button
                            onClick={() => {
                                let newOrder = [...Order];

                                const oldVariation = productInfo.productVariations.find((v) => v.id == newOrder[index].variations[vIndex].variationId);
                                if (oldVariation)
                                    oldVariation.disabled = false;

                                newOrder[index].variations.splice(vIndex, 1);
                                setOrder(newOrder);
                            }}
                            color={"red"}
                            text={"x"}
                            square={"32px"}
                        />
                    </div>
                }
                )}
            </div>
            <div className="flex-r-4 w-full">
                <Button className={"w-full"}
                width={"100%"}
                    onClick={() => {
                        let newOrder = [...Order];

                        if (newOrder[index].variations.length < productInfo.productVariations.length) {
                            newOrder[index].variations.push({
                                variationId: 0,
                                quantity: 0,
                            });
                        }

                        setOrder(newOrder);
                    }}
                    text="Add variação"
                />
                <Button
                    onClick={() => {
                        setOrder((prevOrder) => {
                            return prevOrder.filter((_, i) => i !== index);
                        });
                        const enableProduct = products.find((p) => p.id == product.productId);
                        enableProduct.disabled = false;
                    }}
                    color={"red"}
                    text={"x"}
                />
            </div>
        </div>
    </div>

}

