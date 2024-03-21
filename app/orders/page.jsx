'use client';

import { useEffect, useState } from "react";
import Main from "@components/Main";
import Input from "@components/Input";
import axios from "axios";



export default function () {

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProducts(res.data);
        })
    }, []);

    return <main className="main flex-c-8">
        <h1 className="bold">Produtos</h1>
        <div className='w-full'>
            <Input options={products?.map((product) => product)} search id="filter" onChange={(e) => setFilter(e.target.value)} label="Pesquisar produto"></Input>
        </div>
        <div className='w-full'>
            <h1 className='text-3xl font-bold'>Pedidos</h1>
            <h2 className='text-2xl'>Informações:</h2>
        </div>
    </main>;
};
