'use client';

import Button from "./Button";

export default function Nav() {
    return <>
        <div className="w-full h-20 bg-white" />
        <div className="w-full h-20 px-4 bg-white fixed flex justify-between top-0 shadow-md " style={{ zIndex: 10 }}>
            <Button href="/" color="gray">Início</Button>

            <div className="flex-r-4">
                <Button href="/orders" color={"red"}>Visualizar pedidos</Button>

                <Button href="/orders/0" color="gray">Novo pedido</Button>
            </div>

            <div className="flex-r-4">
                <Button href="/products">Visualizar produtos</Button>

                <Button href="/products/0" color="gray">Novo produto</Button>
            </div>
        </div>
    </>;
};
