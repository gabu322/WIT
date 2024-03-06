'use client';

import Main from "@components/Main";
import { useState, useEffect } from "react";
import Input from '@components/Input';
import axios from "axios";
import Button from "@components/Button";
import Product from "./Product";

export default function ({ params }) {
    const [products, setProducts] = useState([]);
    const [optionId, setOptionId] = useState();
    const [orderItems, setOrderItems] = useState([]); // [productId, [variationId, quantity]]
    const [filter, setFilter] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProducts(res.data);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/orders', {
            date: date,
        });
        const items = orderItems.flatMap((item) => {
            return item.variations.map((variation) => {
                return {
                    orderId: response.data.id,
                    // orderId: response.data.orderId,
                    variationId: variation.variationId,
                    quantity: +variation.quantity,
                };
            });
        });
        
        axios.post('/api/orderItems', items);
    };

    return <Main>
        <form className="flex-c-4 w-full" onSubmit={handleSubmit}>
            <div className="flex-r-4 w-full">
                <div className="flex-c-4 w-full">
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
                <div className="flex-c-4">
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

                            setOrderItems([...orderItems, {
                                productId: optionId.id,
                                variations: []
                            }]);
                            const disableProduct = products.find((p) => p.id == optionId.id);
                            disableProduct.disabled = true;
                        }}
                    >Adicionar produto +</Button>
                </div>
            </div>

            <div className='w-full flex-c-4'>
                <h2 className='text-2xl'>Produtos:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                    {orderItems.map((product, index) => (
                        <Product
                            key={index}
                            product={product}
                            index={index}
                            orderItems={orderItems}
                            setOrderItems={setOrderItems}
                            products={products}
                            setProducts={setProducts}
                        />
                    ))}
                </div>
            </div>
        </form>
    </Main>

}
