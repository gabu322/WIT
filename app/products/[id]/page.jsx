'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { toast } from "react-toastify";

import Button from "@components/Button";
import Input from "@components/Input";

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

    const [newImageLink, setNewImageLink] = useState('');

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

    return <>

        <div className="h-1/3">
            <h1 className="text-4xl font-bold">Produto</h1>
        </div>
        <form className="h-2/3 grid grid-rows-5 grid-cols-5 gap-8 grid-flow-col" onSubmit={handleSubmit}>

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

            <div className="card row-span-2 col-span-3 bg-white flex flex-row">
                <div className="w-48 flex justify-between flex-col">
                    <p className="cardTitle">Imagens</p>
                    <Input
                        label="Link da imagem"
                        value={newImageLink}
                        onChange={(e) => setNewImageLink(e.target.value)}
                        className="w-full"
                    />
                    <Button
                        onClick={() => handleAddImage(newImageLink)}
                        text="Adicionar"
                        color="black"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    {productImages.map((image, index) => (
                        <div className="h-48">
                            <img src={image.link} className=" h-full object-contain" />

                        </div>
                    ))}
                </div>
            </div>

            {/* Variações */}
            <div className="card row-span-5 col-span-2 bg-white flex flex-col gap-8">
                <div className="w-full flex justify-between">
                    <p className="cardTitle">Variações</p>
                    <Button
                        onClick={handleAddVariation}
                        text={"+ Adicionar"}
                        color='black'

                    />
                </div>
                <div className="grow grid grid-cols-6">
                    <p className="col-span-1">Nome</p>
                    <p className="col-span-1">Estoque</p>
                    <p className="col-span-1">Preço de compra</p>
                    <p className="col-span-1">Preço de venda</p>
                    <p className="col-span-1">Imagem</p>
                    {productVariations.map((variation, index) => (
                        <div key={index} className="col-span-6 grid grid-cols-6 gap-2">
                            <Input
                                name="name"
                                value={variation.name}
                                onChange={(e) => handleChangeVariation(e, index)}
                                className="col-span-1"
                            />
                            <Input
                                name="stock"
                                value={variation.stock}
                                onChange={(e) => handleChangeVariation(e, index)}
                                className="col-span-1"
                            />
                            <Input
                                name="buyPrice"
                                value={variation.buyPrice}
                                onChange={(e) => handleChangeVariation(e, index)}
                                className="col-span-1"
                            />
                            <Input
                                name="sellPrice"
                                value={variation.sellPrice}
                                onChange={(e) => handleChangeVariation(e, index)}
                                className="col-span-1"
                            />
                            <Input
                                name="imageLink"
                                value={variation.imageLink}
                                onChange={(e) => handleChangeVariation(e, index)}
                                className="col-span-1"
                            />
                            <Button
                                onClick={() => handleRemoveVariation(index)}
                                text="Remover"
                                color="red"
                            />
                        </div>
                    ))}


                </div>
            </div>
        </form >
    </>
};
