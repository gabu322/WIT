'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

function Product({ product, className }) {
    const images = (product.images?.map((image) => {
        return image.link;
    }).filter((link) => link));

    return <div className={"shadow rounded-lg h-full bg-white w-52 flex flex-col justify-between overflow-hidden relative"}>
        <div className=" h-9/10">
            <Image width={"1000"} height={"1000"} src={images[0]}></Image>
        </div>
        <div className="p-3 truncate font-bold leading-3" style={{ }}>
            {product.name}
        </div>
        <Link href={`/products/${product.id}`} className="absolute w-4 h-4 right-2 top-2">
            <Image src="/icons/black/edit.svg" width={16} height={16} />
        </Link>
    </div>

}

export default function Page() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const fetchingToast = toast.loading('Carregando produtos...');
                let productsInfo = await axios.get('/api/products')
                    .then((res) => res.data)
                    .catch((error) => {
                        toast.update(fetchingToast, {
                            render: "Erro ao buscar informações",
                            type: "error",
                            isLoading: false,
                            autoClose: true
                        });
                    });

                let imagesInfo = await axios.get('/api/productImages')
                    .then((res) => res.data)
                    .catch((error) => {
                        toast.update(fetchingToast, {
                            render: "Erro ao buscar informações",
                            type: "error",
                            isLoading: false,
                            autoClose: true
                        });
                    });

                let filling = productsInfo.map((product) => {
                    product.images = imagesInfo.filter((image) => image.productId === product.id);
                    return product;
                });
                setProducts(filling);

                // setProducts([...products])

                toast.update(fetchingToast, {
                    render: "Produtos carregados com sucesso!",
                    type: "success",
                    isLoading: false,
                    autoClose: true
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchingData();
    }, []);

    return <>
        <div className="h-1/3">
            <h1 className="text-4xl font-bold">Produtos</h1>
        </div>
        <div className="h-2/3 grid grid-rows-2 grid-flow-col gap-8 p-2 overflow-x-auto scrollbar-hide ">
            {products
                .filter((product) => !filter || product.name.toLowerCase().includes(filter.toLowerCase()))
                .map((product) => (
                    <Product key={product.id} product={product} />
                ))}
        </div>
    </>
}
