'use client';

import Button from '@components/Button';
import Input from '@components/Input';
import { calculateSellPrice } from '@functions/sellPrice.js';
import { useState } from 'react';


export default function Page() {
    const [baseCost, setBaseCost] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);

    return <>
        <h1 className='grow-[1]'>Calculadora de Finanças</h1>
        <p className='grow-[2]'>O preço de venda é: {sellPrice}</p>
    </>
    {/* <p>Essa é a calculadora de finanças</p>
        <Input label="Custo base" type="number" onChange={(e) => {
            setBaseCost(e.target.value)
            console.log(e)}}/>
        <Button onClick={() => setSellPrice(calculateSellPrice(parseFloat(baseCost)))}>Calcular</Button> */}

}
