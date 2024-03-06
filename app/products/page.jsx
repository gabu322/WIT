'use client';

import Main from "@components/Main";
import Products from "./components/Products";
import axios from "axios";
import { useEffect, useState } from "react";
import Input from '@components/Input';


export default function () {
    const [products, setProducts] = useState([]);
    
    const [filter, setFilter] = useState();

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProducts(res.data);
        })

    }, []);

    // return <main className="flex-c-4 w-full sm:w-4/5 lg:w-2/3 xl:w-3/5 m-auto mb-4 p-4 items-center mainContent">
    return <>

        <main className="main">

            <h1 className="bold">Produtos</h1>
            <div className='w-full'>
                <Input options={products?.map((product) => product)}
                    id="filter"
                    isSearchable
                    onChange={(e) => setFilter(e.target.value)}
                    label="Pesquisar produto"
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {products.filter(product => !filter || product.name.toLowerCase().includes(filter.toLowerCase())).map((product) =>
                    <Products key={product.id} product={product} />
                )}

            </div>
        </main>
    </>;
};
