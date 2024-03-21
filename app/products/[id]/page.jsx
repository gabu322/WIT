'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

import { toast } from "react-toastify";

import Button from "@components/Button";
import Input from "@components/Input";
import Alert from "@components/Alert";

/** Page to create or edit a product
 * TODO - Add ways to remove images and variations
 * TODO - Add a way handle less significant errors
**/
export default ({ params }) => {
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

    const [alert, setAlert] = useState();

    useEffect(() => {
        setDebugMode(location.search.includes('debug'));

        // Fetch the product details and its images and variations
        const fetchData = async () => {

            const fetchingToast = toast.loading('Buscando dados do produto...')

            // await axios.get(`/api/products?id=${params?.id}`)
            await axios.get(`/api/products/${params?.id}`)
                .then(res => {
                    setProduct(res.data)
                }).catch(error => {
                    setAlert(error)
                    toast.update(fetchingToast, { render: "Produto não encontrado", type: "error", isLoading: false, autoClose: 5000 });
                    return Promise.reject('Product not found');
                });

            await axios.get(`/api/productVariations/search?productId=${params?.id}`)
                .then(res => setProductVariations(res.data))

            await axios.get(`/api/productImages/search?productId=${params?.id}`)
                .then(res => setProductImages(res.data))

            toast.update(fetchingToast, { render: "Informações encontradas", type: "success", isLoading: false, autoClose: 5000 });
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
                await axios.put('/api/products', product);

                await axios.put('/api/productVariations', productVariations);

                await axios.put('/api/productImages', productImages);

                toast.update(updatingToast, { render: "Produto atualizado", type: "success", isLoading: false, autoClose: 5000 });
            } else {
                //check if exists a product with the same name
                const existingProduct = await axios.get(`/api/products/search?name=${product.name}`);

                if (existingProduct.data.length > 0) {
                    setAlert('Produto já existe');
                    throw new Error('Product already exists');
                }

                if (productVariations.length < 1) {
                    setAlert('Adicione pelo menos uma variação');
                    throw new Error('No variations');
                }
                const newProductId = await axios.post('/api/products', product);

                productVariations.forEach((variation) => { variation.productId = newProductId.data.id });
                productImages.forEach((image) => { image.productId = newProductId.data.id; });

                await axios.post('/api/productVariations', productVariations);
                await axios.post('/api/productImages', productImages);
            }

            router.push('/products');
        } catch (error) {
            console.error('Error in one of the requests:', error);
        }
    };

    return <>
        {alert && <Alert error={alert} color="red" />}

        <main className="main">

            <form onSubmit={handleSubmit} className="flex-c-10 w-full">

                {/* Informações gerais */}
                <div className="flex-c-8">
                    <h1 className="text-4xl font-bold w-full">Informações gerais</h1>

                    <div className="flex-c-6">
                        <Input
                            label="Nome completo do produto"
                            name="name"
                            initialValue={product.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />

                        <Input
                            label="Descrição"
                            name="description"
                            initialValue={product.description}
                            onChange={(e) => handleChange(e)}
                            type="textarea"
                            required
                        />

                        <div className="flex-r-6">
                            <Input
                                label="Shopee ID"
                                name="shopeeId"
                                initialValue={product.shopeeId}
                                onChange={(e) => handleChange(e)}
                                required
                            />

                            <Button
                                href={"https://shopee.com.br/product/" + process.env.NEXT_PUBLIC_SHOPEE_SHOP_ID + "/" + product.shopeeId}
                                blank
                                text="Verificar"
                            />

                            <Button
                                href={"https://seller.shopee.com.br/portal/product/" + product.shopeeId}
                                blank
                                text="Editar"
                            />
                        </div>

                        <Input
                            label="Estoque esperado"
                            name="targetedStock"
                            initialValue={product.targetedStock} type="number"
                            onChange={(e) => handleChange(e)}
                        />

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
                                    handleAddImage(newImageLink.trim());;
                                }
                            }}
                            text="Adicionar imagem"
                        />

                    </div>
                    {productImages.length > 0 && <div className="flex-r-6 w-full">
                        {productImages?.map((image, index) => (
                            <div key={index} className="relative border-2 rounded-lg border-orange-200" style={{ width: "150px", height: "150px" }}>
                                <img src={image.link} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                <Button
                                    className={"absolute -top-0 -right-0"}
                                    onClick={() => {
                                        handleRemoveImage(index)
                                    }}
                                    square
                                    color={"transparent"}
                                    text="-"
                                />

                            </div>
                        ))}
                    </div>
                    }
                </div>

                {/* Informações de venda */}
                <div className="flex-c-8">
                    <div className="flex-r-6">
                        <h1 className="text-4xl font-bold w-full">Informações de venda</h1>
                        {productVariations.length > 1 && <Button onClick={handleApplyToAll} text="Aplicar a todos" />}
                        <Button onClick={handleAddVariation} color="green">Adicionar variações</Button>
                    </div>

                    <div className="flex-c-6">
                        {productVariations.map((variation, index) => (
                            <div key={index} className={productVariations.length == 1 ? "flex-c-6" : "flex-r-6"}>
                                {productVariations.length > 1 && <Input
                                    id={"variationName" + (index + 1)}
                                    name="name"
                                    label={"Nome da variação"}
                                    initialValue={variation.name}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                    required
                                />}
                                <Input
                                    id={"stock" + (index + 1)}
                                    name="stock"
                                    label={"Estoque atual"}
                                    type="number"
                                    initialValue={variation.stock}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                    required
                                />
                                <Input
                                    id={"buyLink" + (index + 1)}
                                    name="buyLink"
                                    label={"Link de compra"}
                                    initialValue={variation.buyLink}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                    required
                                />
                                <Input
                                    id={"buyPrice" + (index + 1)}
                                    name="buyPrice"
                                    label={"Preço de compra (USD)"}
                                    type="currency"
                                    initialValue={variation.buyPrice}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                    required
                                />
                                <Input
                                    id={"sellPrice" + (index + 1)}
                                    name="sellPrice"
                                    label={"Preço de venda (R$)"}
                                    type="currency"
                                    initialValue={variation.sellPrice}
                                    onChange={(e) => handleChangeVariation(e, index)}
                                    required
                                />
                                {productVariations.length > 1 &&
                                    <Button
                                        onClick={() => handleRemoveVariation(index)}
                                        color="red"
                                        square
                                        text="X"
                                    />
                                }
                            </div>
                        ))}
                    </div>
                </div>

                {/* Debug buttonsebug */}
                <div className="w-full flex flex-row-reverse gap-6">
                    <Button
                        type="submit"
                        color="green"
                        text={params?.id > 0
                            ? "Atualizar produto"
                            : "Criar produto"
                        }
                    />
                    {debugMode && <>
                        <Button
                            onClick={() => { console.log(product); }}
                            color="yellow"
                            text="Print product"
                        />

                        <Button
                            onClick={() => { console.log(productVariations); }}
                            color="yellow"
                            text="Print Variations"
                        />
                        <Button
                            onClick={() => { console.log(productImages); }}
                            color="yellow"
                            text="Print Images"
                        />
                    </>}
                </div>
            </form>
        </main>
    </>
};
