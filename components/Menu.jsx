'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Menu() {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <div className='w-16 h-screen flex-none' />

        <aside className={`w-16 h-screen ${isHovered ? 'hover:w-48' : ''} fixed left-0  top-0 p-4 transition-all bg-gradient-to-b from-[#3ca991] to-[#387570] flex flex-col gap-6 text-white font-bold overflow-hidden z-50`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-shrink-0">
                <Image src="/logo.png" width={32} height={32} className='flex-shrink-0' />
            </div>

            <div className="relative">
                <hr className={`absolute left-0 top-0 ${!isHovered ? "w-8" : "w-0"} transition-all`} />
                <div className={`absolute left-0 top-0 transform leading-none transition-transform translate-y-[-50%]
                ${isHovered ? "translate-x-0" : "translate-x-[-150%]"} `}>
                    Produtos
                </div>
            </div>

            <div className="flex-shrink-0 flex flex-row gap-4 ">
                <Image className="pl-1" src="/icons/white/list.svg" width={32} height={32} />
                <Link href="/products" className={"transition-all cursor-pointer " + (isHovered ? " opacity-100" : " opacity-0")}>Visualizar</Link>
            </div>

            <div className="flex-shrink-0 flex flex-row gap-4 ">
                <Image className="pl-1" src="/icons/white/add.svg" width={32} height={32} />
                <Link href="/products/0" className={"transition-all cursor-pointer " + (isHovered ? " opacity-100" : " opacity-0")}>Adicionar</Link>
            </div>

            <div className="relative">
                <hr className={`absolute left-0 top-0 ${!isHovered ? "w-8" : "w-0"} transition-all`} />
                <div className={`absolute left-0 top-0 transform leading-none transition-transform translate-y-[-50%]
                ${isHovered ? "translate-x-0" : "translate-x-[-150%]"} `}>
                    Finanças
                </div>
            </div>

            <div className="flex-shrink-0 flex flex-row gap-4 ">
                <Image className="pl-2" src="/icons/calculator.svg" width={32} height={32} />
                <Link href="/finances/calculator" className={"transition-all cursor-pointer " + (isHovered ? " opacity-100" : " opacity-0")}>Calcular</Link>
            </div>
        </aside>
    </>
}
