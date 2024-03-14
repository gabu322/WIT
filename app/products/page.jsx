'use client';

import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

import Input from '@components/Input';
import Carrousel from "@components/Carrousel";
import Button from "@components/Button";

function Products({ product }) {

    const images = (product.productImages?.map((image) => {
        return image.link;
    }).filter((link) => link));

    return <div className="shadow-xl rounded-lg overflow-hidden relative bg-white"
        style={{
            height: "400px"
        }}
    >
        <div className="w-full h-2/5">
            <Carrousel images={images}></Carrousel>
        </div>
        <div className="w-full h-3/5 flex flex-col justify-between gap-4 p-4">
            <h3 className="font-bold truncate">{product.name}</h3>

            <div className="overflow-auto grow flex flex-col gap-1">
                {product.productVariations.map((variation) => {
                    return <div key={variation.id} className="flex flex-row justify-between w-full">
                        <div className="truncate">{variation.name}</div>
                        <div>{variation.stock}/{product.targetedStock}</div>
                    </div>
                })}

            </div>

            <div className="flex flex-row justify-between w-full gap-4">
                <Button href={"/products/" + product.id} color="green" className={"flex-grow"}>Visualizar</Button>
                <Button href={"/products/" + product.id} className={"flex-grow"}>Editar</Button>
            </div>

        </div>

    </div>
};

export default function () {
    const [products, setProducts] = useState([]);

    const [filter, setFilter] = useState();

    useEffect(() => {
        const fetchingToast = toast.loading('Carregando produtos...');

        axios.get('/api/products').then((res) => {
            setProducts(res.data);
            toast.update(fetchingToast, { render: "Informações encontradas", type: "success", isLoading: false, autoClose: 5000 });
        }).catch((err) => {
            toast.update(fetchingToast, { render: "Erro ao buscar informações", type: "error", isLoading: false, autoClose: 5000 });
        });


    }, []);

    return <main className="main flex-c-8">
        <h1 className="text-4xl font-bold w-full">Produtos</h1>
        <div className='w-full'>
            <Input
                id="filter"
                options={products?.map((product) => product)}
                isSearchable
                onChange={(e) => setFilter(e.target.value)}
                label="Pesquisar produto"
            />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
            {products.filter(product => !filter || product.name.toLowerCase().includes(filter.toLowerCase())).map((product) =>
                <Products key={product.id} product={product} />
            )}

        </div>
    </main>;
};
