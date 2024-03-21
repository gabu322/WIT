'use client';

import { useState, useEffect } from "react";
import Input from '@components/Input';
import axios from "axios";
import Button from "@components/Button";

function Product({ product, index, order, setOrder }) {
    const handleAddVariation = () => {
        let newOrder = [...order];
        newOrder[index].variations.push({
            variationId: 0,
            quantity: 0,
        });
        setOrder(newOrder);
    }

    const handleUpdateVariation = (vIndex, e) => {
        let newOrder = [...order];
        newOrder[index].variations[vIndex][e.target.name] = +e.target.value;
        setOrder(newOrder);
    }

    return <div className="w-full shadow-lg rounded-lg overflow-hidden p-6 flex-r-4">
        {/* <div className="w-1/4">
            {product.images.length > 0 && (
                <img
                    src={product.images[0].link}
                    alt={product.name + "_image"}
                    className="w-full"
                />
            )}
        </div> */}
        <div className="w-full flex-c-6">
            <div className="flex-r-6">
                <h2 className="text-2xl font-bold text-pretty">{product.name}</h2>

            </div>
            {order[index].variations.length > 0 && <div className="flex-c-4">
                {order[index].variations.map((variation, variationIndex) => (
                    <div key={variation.id} className="flex-r-4">
                        <Input
                            id={`variation-${index}-${variationIndex}`}
                            required
                            name="variationId"
                            options={product.variations}
                            onChange={(e) => handleUpdateVariation(variationIndex, e)}
                            label={"Variação"}
                        />
                        <Input
                            id={`quantity-${index}-${variationIndex}`}
                            type="number"
                            name="quantity"
                            required
                            disabled={variation.variationId == 0 || product.variations.find((v) => variation.variationId)?.stock == 0}
                            label={`Quantidade (max: ${product.variations.find((v) => v.id == variation.variationId)?.stock || 0})`}
                            onChange={(e) => handleUpdateVariation(variationIndex, e)}
                        />
                        <Button
                            onClick={() => {
                                let updatedOrder = [...order];
                                updatedOrder[index].variations.splice(variationIndex, 1);
                                setOrder(updatedOrder);
                            }}
                            text="X"
                            square
                            color="red"
                        />
                    </div>
                ))}
            </div>}
            {/* Button to add a variation */}
            <div className="w-full flex flex-row-reverse">
                <Button
                    onClick={() => { handleAddVariation() }}
                    text="Adicionar Variação +"
                    disabled={product.variations.length == order[index].variations.length}
                />
            </div>
        </div>
    </div>;
}
export default function Page({ params }) {
    const [products, setProducts] = useState([]);
    const [optionId, setOptionId] = useState();
    const [order, setOrder] = useState([]); // [productId, [variationId, quantity]]
    const [filter, setFilter] = useState();
    const [date, setDate] = useState();
    const [debugMode, setDebugMode] = useState(false);

    useEffect(() => {
        setDebugMode(location.search.includes('debug'));

        axios.get('/api/products').then((res) => {
            setProducts(res.data);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if(params?.id > 0) {
                console.log('Order already exists');

            } else {

            }
        } catch (error) {
            console.error(error);
        }
        const response = await axios.post('/api/orders', {
            date: date,
        });
        const items = order.flatMap((item) => {
            return item.variations.map((variation) => {
                return {
                    orderId: response.data.id,
                    variationId: variation.variationId,
                    quantity: +variation.quantity,
                };
            });
        });

        axios.post('/api/order', items);
    };

    return <main className="main ">
        <form className="flex-c-8 w-full" onSubmit={handleSubmit}>
            <div className="flex-r-6 w-full">
                <div className="flex-c-6 w-full">
                    <div className="flex justify-between">
                        <h1 className='text-3xl font-bold'>Pedidos</h1>

                        <Input type="date"
                            required
                            label="Data"
                            id="data"
                            className={"w-1/3"}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                        />
                    </div>

                    <Input id="filter"
                        options={products}
                        isSearchable
                        onChange={(e) => {
                            setFilter(e.target.value);
                            setOptionId(null);
                        }}
                        label="Pesquisar produto"
                        initialValue={filter}
                        getOptionInfo={(id) => setOptionId(id)}
                    />
                </div>
                <div className="flex-c-6">
                    <Button id="submit"
                        color={"green"}
                        width={"100%"}
                        type="submit"
                    >Realizar Pedido</Button>

                    <Button
                        onClick={() => {
                            setFilter(null);
                            setOptionId(null);
                            if (optionId == null) return;

                            setOrder([...order, {
                                productId: optionId.id,
                                variations: []
                            }]);
                            const disableProduct = products.find((p) => p.id == optionId.id);
                            disableProduct.disabled = true;
                        }}
                    >Adicionar produto +</Button>
                </div>
            </div>

            {order.length > 0 && <div className='w-full flex-c-8'>
                {order.map((product, index) => (
                    <Product
                        key={product.productId}
                        product={products.find((p) => p.id == product.productId)}
                        index={index}
                        order={order}
                        setOrder={setOrder}
                    />
                ))}
            </div>}
            {/* Debug buttons */}
            {debugMode && <div className="flex-r-8">
                <Button
                    onClick={() => {
                        console.log(order);
                    }}
                    text="Log Order"
                />
                <Button
                    onClick={() => {
                        console.log(products);
                    }}
                    text="Log Products"
                />
            </div>}
        </form>
    </main>

}
