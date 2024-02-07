'use client';

import Button from "@components/Button";
import Input from "@components/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Main from "@components/Main";

export default ({ params }) => {
    const router = useRouter();
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        description: '',
        link: '',
        shopeeId: '',
        productVariations: [{
            name: 'unique',
            wheigth: 0,
            stock: 0,
            imageLink: '',
            expectedStock: 0,
            buyPrice: '',
            sellPrice: '',
            buyLink: '',
        }], // Fix: use productVariations instead of variations
        productImages: [],
    });

    const [productImages, setProductImages] = useState([]);
    const [productVariations, setProductVariations] = useState([{
        name: 'unique',
        wheigth: 0,
        stock: 0,
        imageLink: '',
        expectedStock: 0,
        buyPrice: '',
        sellPrice: '',
        buyLink: '',
    }]);


    const [newImageLink, setNewImageLink] = useState('');

    useEffect(() => {
        if (params?.id >= 0) {
            console.log("product");
            axios.get('/api/products/' + params?.id).then((res) => {
                setProduct(res.data);
            });
        }
    }, [params?.id]);

    const handleChange = (e, index) => {
        if (index !== undefined) {
            const updatedVariations = [...product.productVariations];
            updatedVariations[index] = { ...updatedVariations[index], [e.target.name]: e.target.value };
            setProduct({ ...product, productVariations: updatedVariations });
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }
        console.log(product);
    };

    const handleAddVariation = () => {
        if (productVariations.length == 1) {
            setProductVariations([
                {
                    name: '',
                    wheigth: 0,
                    stock: 0,
                    imageLink: '',
                    expectedStock: 0,
                    buyPrice: '',
                    sellPrice: '',
                    buyLink: '',
                }, {
                    name: '',
                    wheigth: 0,
                    stock: 0,
                    imageLink: '',
                    expectedStock: 0,
                    buyPrice: '',
                    sellPrice: '',
                    buyLink: '',
                }]);
        } else {
            setProductVariations([
                ...productVariations,
                {
                    name: '',
                    wheigth: 0,
                    stock: 0,
                    imageLink: '',
                    expectedStock: 0,
                    buyPrice: '',
                    sellPrice: '',
                    buyLink: '',
                },
            ]);
        }

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

    const handleApplyToAll = () => {
        const firstVariation = product.productVariations[0];

        const updatedVariations = product.productVariations.map((variation, index) => {
            if (index !== 0) {
                return {
                    ...variation,
                    buyLink: firstVariation.buyLink,
                    buyPrice: firstVariation.buyPrice,
                    sellPrice: firstVariation.sellPrice,
                    stock: firstVariation.stock,
                    expectedStock: firstVariation.expectedStock,
                };
            }
            return variation;
        });

        setProduct({ ...product, productVariations: updatedVariations });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (params?.id != 0) {
                await axios.put('/api/products', product);
                await axios.put('/api/productVariations', product.productVariations);
                await axios.put('/api/productImages', product.productImages);
            } else {
                const newProduct = await axios.post('/api/products', product);

                product.productVariations.forEach((variation) => { variation.productId = newProduct.data.id });
                product.productImages.forEach((image) => { image.productId = newProduct.data.id; });

                await axios.post('/api/productVariations', product.productVariations);
                await axios.post('/api/productImages', product.productImages);
            }

            router.push('/products');
        } catch (error) {
            console.error('Error in one of the requests:', error);
        }
    };

    return <main className="main">

        <form onSubmit={handleSubmit} className="flex-c-10 w-full">

            {/* Informações gerais */}
            <div className="flex-c-8">
                <h1 className="text-4xl font-bold w-full">Informações gerais</h1>

                <div className="flex-c-6">
                    <Input onChange={(e) => handleChange(e)} label="Nome completo do produto" name="name" initialValue={product.name} />

                    <Input onChange={(e) => handleChange(e)} label="Descrição" name="description" initialValue={product.description} type="textarea" />

                    <div className="flex-r-6">
                        <Input onChange={(e) => handleChange(e)} label="Link do produto" name="link" initialValue={product.link} />

                        <Button href={product.link} blank>Página do produto</Button>
                    </div>

                    <div className="flex-r-6">
                        <Input onChange={(e) => handleChange(e)} label="Shopee ID" name="shopeeId" initialValue={product.shopeeId} />

                        <Button href={"https://shopee.com.br/product/" + process.env.NEXT_PUBLIC_SHOPEE_SHOP_ID + "/" + product.shopeeId} blank>Verificar</Button>

                        <Button href={"https://seller.shopee.com.br/portal/product/" + product.shopeeId} blank>Editar</Button>
                    </div>
                </div>
            </div>

            {/* Imagens */}
            <div className="flex-c-8">
                <h1 className="text-4xl font-bold w-full">Imagens</h1>
                <div className="flex-r-6 justify-between">
                    <Input label="Link da imagem" name="imageLink" onChange={(e) => { setNewImageLink(e.target.value); }} />
                    <Button
                        onClick={() => {
                            if (newImageLink.trim() !== '') {
                                handleAddImage(newImageLink.trim());
                                setNewImageLink('');
                            }
                        }}
                    >Adicionar imagem</Button>


                </div>
                <div className="flex-r-6 w-full">
                    {product.productImages?.map((image, index) => (
                        <div key={index} className="relative border-2 rounded-lg border-orange-200" style={{ width: "150px", height: "150px" }}>
                            <img src={image.link} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            <Button
                                className={"absolute -top-0 -right-0"}
                                onClick={() => {
                                    handleRemoveImage(index)
                                    console.log(index);
                                }}
                                square
                                text="-"
                            />

                        </div>
                    ))}
                </div>
            </div>

            {/* Informações de venda */}
            <div className="flex-c-8">
                <div className="flex-r-6">
                    <h1 className="text-4xl font-bold w-full">Informações de venda</h1>
                    {/* Button to add variations */}
                    <Button onClick={handleAddVariation} color="green">Adicionar variação</Button>
                </div>
                <div className="flex-c-6">
                    <Input id="buyPrice" name="buyPrice" label="Preço de compra (USD)" type="currency" initialValue={product.productVariations[0].buyPrice} onChange={(e) => handleChange(e)} required />
                    <Input id="sellPrice" name="sellPrice" label="Preço de venda (R$)" type="currency" initialValue={product.productVariations[0].sellPrice} onChange={(e) => handleChange(e)} required />
                </div>
            </div>


            {/* Variações */}
            {/*  Nome, link de compra, link da imagem, preço de compra, preço de venda, estoque esperado*/}
            <div className="flex-c-8">
                <h1 className="text-4xl font-bold w-full">Variações</h1>
                <div className="flex-c-6">
                    <div className="flex flex-row justify-between">
                        <p className='text-2xl'>{product.productVariations?.length == 1 ? "Infos:" : "Variações:"}</p>

                        <div className="flex-r-6">
                            {product.productVariations?.length > 1 && (<Button onClick={handleApplyToAll} color="purple">
                                Aplicar a todos
                            </Button>)}

                            <Button onClick={handleAddVariation} color={product.productVariations?.length == 1 ? "blue" : "green"}>
                                {product.productVariations?.length == 1 ? "Adicionar variações" : "+ Nova variação"}
                            </Button>
                        </div>
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
                            <div key={index} className="flex-r-4">
                                <div className="flex-c-4 flex-1 ">
                                    <Input id={"name" + (index + 1)}
                                        name="name"
                                        label="Nome*"
                                        required
                                        initialValue={variation.name}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    <Input id={"wheigth" + (index + 1)}
                                        name="wheigth"
                                        label="Peso"
                                        type="number"
                                        initialValue={variation.wheigth}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>

                                <div className="flex-c-4 flex-1 ">
                                    <Input id={"imageLink" + (index + 1)}
                                        name="imageLink"
                                        label="Imagem"
                                        initialValue={variation.imageLink}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    <Input id={"buyLink" + (index + 1)}
                                        name="buyLink"
                                        label="Compra"
                                        initialValue={variation.buyLink}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>

                                <div className="flex-c-4 flex-1 ">
                                    <Input id={"buyPrice" + (index + 1)}
                                        name="buyPrice"
                                        label="Compra (USD)*"
                                        type="currency"
                                        required
                                        initialValue={variation.buyPrice}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    <Input id={"sellPrice" + (index + 1)}
                                        name="sellPrice"
                                        label="Venda (R$)*"
                                        type="currency"
                                        required
                                        initialValue={variation.sellPrice}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>

                                <div className="flex-c-4 flex-1">
                                    <Input id={"stock" + (index + 1)}
                                        name="stock"
                                        label="Atual*"
                                        type="number"
                                        required
                                        initialValue={variation.stock}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    <Input id={"expectedStock" + (index + 1)}
                                        name="expectedStock"
                                        label="Ideal*"
                                        type="number"
                                        required
                                        initialValue={variation.expectedStock}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                </div>

                                <div>
                                    <Button
                                        onClick={() => handleRemoveVariation(index)}
                                        height={"100%"}
                                        color="red"
                                        text="-"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button type="submit" color="green" >Atualizar produto</Button>
        </form>
    </main>;
};
