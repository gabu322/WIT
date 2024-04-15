'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";

import axios from "axios";
import { toast } from "react-toastify";

import Button from "@components/Button";
import Input from "@components/Input";
import { calculateSellPrice } from '@functions/sellPrice.js';

/** Page to create or edit a product
 * TODO - Add ways to remove images and variations
 * TODO - Add a way handle less significant errors
**/
export default function Page({ params }) {
    const router = useRouter();

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        description: '',
        link: '',
        shopeeId: ''
    });

    const [productImages, setProductImages] = useState([/* productId, link */]);

    const [productVariations, setProductVariations] = useState([{
        name: 'unique',
        stock: 0,
        imageLink: '',
        buyPrice: '',
        buyLink: '',
        sellPrice: '',
        priorityWeight: '',
    }]);

    const [newImage, setNewImage] = useState('');
    const [variationsEditingMode, setVariationsEditingMode] = useState(false);
    const [debugMode, setDebugMode] = useState(false);


    useEffect(() => {
        setDebugMode(location.search.includes('debug'));

        // Fetch the product details and its images and variations
        const fetchData = async () => {

            const fetchingToast = toast.loading('Buscando dados do produto...')

            // await axios.get(`/api/products?id=${params?.id}`)
            await axios.get(`/api/products/${params?.id}`).then(res => {
                toast.update(fetchingToast, {
                    render: "Produto encontrado, buscando dados das variações...",
                });
                setProduct(res.data)
            }).catch(error => {
                toast.update(fetchingToast, {
                    render: "Produto não encontrado",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                });
                return Promise.reject('Product not found');
            });

            await axios.get(`/api/productVariations/search?productId=${params?.id}`).then(res => {
                toast.update(fetchingToast, {
                    render: "Variações encontradas, buscando imagens...",
                });
                setProductVariations(res.data);
            }).catch(error => {
                toast.update(fetchingToast, {
                    render: "Variações não encontradas",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                });
                return Promise.reject('Variations not found');
            });

            await axios.get(`/api/productImages/search?productId=${params?.id}`).then(res => {
                toast.update(fetchingToast, {
                    render: "Imagens encontradas",
                });
                setProductImages(res.data)
            }).catch(error => {
                toast.update(fetchingToast, {
                    render: "Imagens não encontradas",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                });
                return Promise.reject('Images not found');
            });

            toast.update(fetchingToast, { render: "Informações encontradas", type: "success", isLoading: false, autoClose: 3000 });
        };

        // If is the id of a existing product, fetch the product details
        if (params?.id > 0) {
            fetchData();
        }
    }, [params?.id]);

    // Function to handle the changes in the product details
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Function to add a new variation
    const handleAddVariation = () => {
        let newProductVariations = [...productVariations];

        // If there was only one variation, reset its name to empty
        if (newProductVariations.length === 1) {
            newProductVariations[0] = { ...newProductVariations[0], name: '' };
        }

        newProductVariations.push({
            productId: product?.id,
            name: '',
            stock: 0,
            imageLink: '',
            buyPrice: '',
            buyLink: '',
            sellPrice: '',
            priorityWeight: '',
        });


        setProductVariations(newProductVariations);
    };

    // Function to handle the changes in the variations
    const handleChangeVariation = (e, index) => {
        const updatedVariations = [...productVariations];

        updatedVariations[index] = { ...updatedVariations[index], [e.target.name]: e.target.value };

        setProductVariations(updatedVariations);
    };

    // Function to remove a variation, aways keeping at least one
    const handleRemoveVariation = (index) => {
        if (productVariations.length > 1) {
            const updatedVariations = [...productVariations];
            updatedVariations.splice(index, 1);

            // If there is only one variation left, reset its name to 'unique'
            if (updatedVariations.length == 1) {
                updatedVariations[0].name = 'unique';
            }

            setProductVariations(updatedVariations);
        }
    };

    // Function to add a new image, up to 5
    const handleAddImage = (imageLink) => {
        if (productImages.length < 5) {
            setProductImages([...productImages, {
                productId: product?.id,
                link: imageLink
            }]);
        }
    };

    // Function to remove an image
    const handleRemoveImage = (index) => {
        const updatedImages = [...productImages];
        updatedImages.splice(index, 1);
        setProductImages(updatedImages);
    };

    const handleApplyToAll = () => {
        const updatedVariations = [...productVariations];
        const firstVariation = updatedVariations[0];

        updatedVariations.forEach((variation, index) => {
            if (index !== 0) {
                updatedVariations[index] = { ...variation, stock: firstVariation.stock, buyPrice: firstVariation.buyPrice, sellPrice: firstVariation.sellPrice };
            }
        });

        setProductVariations(updatedVariations);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (params?.id > 0) {
                const updatingToast = toast.loading('Atualizando produto...');
                await axios.put(`/api/products/${params?.id}`, product);

                toast.update(updatingToast, {
                    render: "Produto atualizado, atualizando variações...",
                });
                await axios.put('/api/productVariations', productVariations);

                toast.update(updatingToast, {
                    render: "Variações atualizadas, atualizando imagens...",
                });
                await axios.put('/api/productImages', productImages);

                toast.update(updatingToast, { render: "Produto atualizado", type: "success", isLoading: false, autoClose: 3000 });
            } else {
                //check if exists a product with the same name
                const existingProduct = await axios.get(`/api/products/search?name=${product.name}`);

                if (existingProduct.data.length > 0) {
                    throw new Error('Product already exists');
                }

                if (productVariations.length < 1) {
                    throw new Error('No variations');
                }
                const creatingToast = toast.loading('Criando produto...');

                const newProductId = await axios.post('/api/products', product);

                toast.update(creatingToast, { render: "Produto criado, criando variações...", });

                productVariations.forEach((variation) => { variation.productId = newProductId.data.id });
                productImages.forEach((image) => { image.productId = newProductId.data.id; });

                await axios.post('/api/productVariations', productVariations);

                toast.update(creatingToast, {
                    render: "Variações criadas, criando imagens...",
                });

                await axios.post('/api/productImages', productImages);

                toast.update(creatingToast, {
                    render: "Produto criado",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000
                });
            }

            router.push('/products');
        } catch (error) {
            console.error('Error in one of the requests:', error);
        }
    };

    return <form onSubmit={handleSubmit} className="h-full">

        <div className="h-1/3">
            <h1 className="text-4xl font-bold">Produto</h1>
            {/* submit button */}
            <div className="flex justify-end">
                <Button
                    type="submit"
                    color="black"
                >Salvar</Button>
            </div>
        </div>
        <div className="h-2/3 grid grid-rows-5 grid-cols-5 gap-8 grid-flow-col">
            <div className="card row-span-3 col-span-3 flex-c-8">
                <p className="cardTitle col-span-5">Informações gerais</p>
                <div className="flex-r-8 grow">
                    <div className="flex flex-col justify-between w-2/5">

                        <Input
                            label="Nome"
                            name="name"
                            initialValue={product.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            label="Link"
                            name="link"
                            initialValue={product.link}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            label="Shopee ID"
                            name="shopeeId"
                            initialValue={product.shopeeId}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            label="Estoque esperado"
                            name="expectedStock"
                            initialValue={product.expectedStock}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Input
                        label="Descrição"
                        name="description"
                        initialValue={product.description}
                        onChange={handleChange}
                        required
                        type="textarea"
                        className="col-span-3 row-span-3 w-full"
                    />
                </div>

            </div>

            <div className="card row-span-2 col-span-3  flex flex-row gap-4">
                <div className="w-48 flex justify-between flex-col">
                    <p className="cardTitle">Imagens</p>
                    <Input
                        label="Link da imagem"
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                        className="w-full"
                        disabled={productImages.length >= 5}
                    />
                    <Button
                        onClick={() => handleAddImage(newImage)}
                        color="black"
                    >Adicionar</Button>
                </div>

                <div className="flex flex-row gap-4 ">
                    {productImages.map((image, index) => (
                        <div className="h-36 relative">
                            <Image src={image.link}
                                height={130}
                                width={130}
                                className="fit-cover rounded-lg"
                            />
                            <Image src="/icons/black/close.svg"
                                width={12}
                                height={12}
                                className="absolute w-3 h-3 right-1 top-1 cursor-pointer"
                                onClick={() => handleRemoveImage(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Variações */}
            <div className="card row-span-5 col-span-2 flex flex-col gap-8">
                <div className="w-full flex justify-between">
                    <p className="cardTitle">Variações</p>
                    <Button
                        onClick={() => {
                            let calculatedVariations = [...productVariations];

                            calculatedVariations.forEach((variation, index) => {
                                calculatedVariations[index].sellPrice = calculateSellPrice(variation.buyPrice);
                            });

                            setProductVariations(calculatedVariations);
                        }}
                        color='black'
                    >Calcular valor</Button>
                    <Button
                        onClick={() => handleAddVariation()}
                        color='black'
                    > <img src="/icons/white/add.svg" className="w-4 h-4" /> Adicionar</Button>
                </div>
                <table className="table-auto w-full border-spacing-2">
                    <thead>
                        <tr className=" text-gray-300 h-12">
                            <th>Nome</th>
                            <th>Estoque</th>
                            <th>Preço de compra</th>
                            <th>Preço de venda</th>
                            <th>Link da imagem</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productVariations.map((variation, index) => (
                            <tr>
                                <td><Input
                                    name="name"
                                    initialValue={variation.name}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                /></td>
                                <td><Input
                                    name="stock"
                                    initialValue={variation.stock}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                />
                                </td>
                                <td><Input
                                    name="buyPrice"
                                    initialValue={variation.buyPrice}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                /></td>
                                <td><Input
                                    name="sellPrice"
                                    initialValue={variation.sellPrice}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                /></td>
                                <td><Input
                                    name="imageLink"
                                    initialValue={variation.imageLink}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                /></td>
                                <td><Button
                                    onClick={() => handleRemoveVariation(index)}
                                    icon="/icons/WHITE/close.svg"
                                    color="red"
                                    square
                                /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    </form >
};
