'use client';

import Button from "@components/Button";
import Input from "@components/Input";
import axios from "axios";
import { useEffect, useState } from "react";

export default ({ params }) => {
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        description: '',
        link: '',
        shopeeId: 0,
        productVariations: [], // Fix: use productVariations instead of variations
        productImages: [],
    });

    const handleChange = (e, index) => {
        if (index !== undefined) {
            const updatedVariations = [...product.productVariations];
            updatedVariations[index] = { ...updatedVariations[index], [e.target.name]: e.target.value };
            setProduct({ ...product, productVariations: updatedVariations });
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
    };

    const handleAddVariation = () => {
        setProduct({
            ...product,
            productVariations: [
                ...product.productVariations,
                {
                    id: 0,
                    productId: product?.id,
                    name: '',
                    wheigth: 0,
                    stock: 0,
                    imageLink: '',
                    expectedStock: 0,
                    buyPrice: '',
                    sellPrice: '',
                    buyLink: '',
                },
            ],
        });
    };

    const handleRemoveVariation = (index) => {
        if (product.productVariations.length > 1) {
            const updatedVariations = [...product.productVariations];
            updatedVariations.splice(index, 1);
            setProduct({ ...product, productVariations: updatedVariations });
        }
    };

    const handleAddImage = (imageLink) => {
        setProduct({
            ...product, productImages: [
                ...product.productImages,
                {
                    id: 0,
                    productId: product?.id,
                    link: imageLink,
                },
            ],
        });
    };

    const handleRemoveImage = (index) => {
        if (product.productImages.length > 1) {
            const updatedImages = [...product.productImages];
            updatedImages.splice(index, 1);
            setProduct({ ...product, productImages: updatedImages });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/products', product).then((res) => {
            // console.log(res);
        });
        axios.post('/api/productVariations', product.productVariations).then((res) => {
            // console.log(res);
        });
    };

    return <main className="mb-4">
        <div className='flex-c-4 w-3/5 m-auto p-4 items-center mainContent'>
            <div className='flex flex-row justify-between w-full'>
                <div className="flex-c-4">
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                    <h2 className='text-2xl'>Informações:</h2>
                </div>
                <div className="flex-r-4">
                    {product.productImages?.map((image, index) => (
                        <div key={index} className="flex flex-row justify-between border-2 rounded-lg border-orange-200" style={{ width: "150px", height: "150px" }}>
                            <img src={image.link} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    ))}
                    {product.productImages?.length < 5 && (
                        <div className="flex flex-row justify-between border-2 border-dashed rounded-lg border-orange-200"
                            style={{ width: "150px", height: "150px" }}>
                            <Button transparent width={"100%"} height={"100%"} textColor={"black"} onClick={() => {
                                const imageLink = prompt('Please enter the image link:');
                                if (imageLink !== null && imageLink.trim() !== '') {
                                    handleAddImage(imageLink.trim());
                                }
                            }}>+</Button>
                        </div>
                    )}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <Input onChange={(e) => handleChange(e)} label="Nome completo do produto" name="name" initialValue={product.name} />

                <div className="flex-r-4">
                    <Input onChange={(e) => handleChange(e)} label="Link do produto" name="link" initialValue={product.link} />

                    <Button href={product.link} blank>Página do produto</Button>
                </div>

                <Input onChange={(e) => handleChange(e)} label="Descrição" name="description" initialValue={product.description} type="textarea" />

                <div className="flex-r-4">
                    <Input onChange={(e) => handleChange(e)} label="Shopee ID" name="shopeeId" initialValue={product.shopeeId} type="number" />

                    <Button href={"https://shopee.com.br/product/" + process.env.NEXT_PUBLIC_SHOPEE_SHOP_ID + "/" + product.shopeeId} blank>Verificar</Button>

                    <Button href={"https://seller.shopee.com.br/portal/product/" + product.shopeeId} blank>Editar</Button>
                </div>

                <div className="flex-c-4">
                    <div className="flex flex-row justify-between">
                        <p className='text-2xl'>Variações:</p>

                        <Button onClick={handleAddVariation}>+ Nova variação</Button>
                    </div>

                    <div className="flex-c-3">
                        <div className="flex-r-3 text-center">
                            <div className="flex-1 text-xl"> </div>

                            <div className="flex-1 text-xl">Links</div>

                            <div className="flex-1 text-xl">Preços</div>

                            <div className="flex-1 text-xl">Estoque</div>
                            <div style={{ width: "40px" }} />
                        </div>

                        {product.productVariations?.map((variation, index) => (
                            <div key={index} className="flex-r-3">
                                <Input onChange={(e) => handleChange(e, index)} label="Nome" name="name" id={"name" + (index + 1)} initialValue={variation.name} />

                                <Input onChange={(e) => handleChange(e, index)} label="Peso" name="wheigth" id={"wheigth" + (index + 1)} type="number" initialValue={variation.wheigth} />

                                <Input onChange={(e) => handleChange(e, index)} label="Imagem" name="imageLink" id={"imageLink" + (index + 1)} initialValue={variation.imageLink} />

                                <Input onChange={(e) => handleChange(e, index)} label="Compra" name="buyLink" id={"buyLink" + (index + 1)} initialValue={variation.buyLink} />

                                <Input onChange={(e) => handleChange(e, index)} label="Compra" name="buyPrice" id={"buyPrice" + (index + 1)} type="currency" initialValue={variation.buyPrice} />

                                <Input onChange={(e) => handleChange(e, index)} label="Venda" name="sellPrice" id={"sellPrice" + (index + 1)} type="currency" initialValue={variation.sellPrice} />

                                <Input onChange={(e) => handleChange(e, index)} label="Atual" name="stock" id={"stock" + (index + 1)} type="number" initialValue={variation.stock} />

                                <Input onChange={(e) => handleChange(e, index)} label="Ideal" name="expectedStock" id={"expectedStock" + (index + 1)} type="number" initialValue={variation.expectedStock} />

                                <div><Button onClick={() => handleRemoveVariation(index)} color="red">-</Button></div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button type="submit">Criar produto</Button>
            </form>
        </div>
    </main>;
};
