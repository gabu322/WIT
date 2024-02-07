'use client';

import { useEffect, useState } from "react";

export default function() {
    const [printValue, setPrintValue] = useState('');
    useEffect(() => {
        const quantity = 20;
        let info = "";
        //{"name": "Product 1", "description": "Description for Product 1", "link": "https://example.com/product1"},
        for(let i = 1; i <= quantity; i++) {
            info += `{"name": "Product ${i}", "description": "Description for Product ${i}", "link": "https://example.com/product${i}"},`;
        }
        setPrintValue("[" + info + "]");
    }, [printValue]);
    return <div>
        {printValue}
    </div>;
}
