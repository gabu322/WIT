'use client';

import Image from 'next/image'
import { useState } from 'react'


export default function Menu() {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <div className="h-full w-16" />
        <div className={`h-full w-16 ${isHovered ? 'hover:w-48' : ''} fixed left-0  top-0 p-4 transition-all bg-gradient-to-b from-[#3ca991] to-[#387570] flex flex-col gap-6 text-white font-bold overflow-hidden`}
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
                <Image className="pl-2" src="/icons/add.svg" width={24} height={24} />
                <div className={"transition-all" + (isHovered ? " opacity-100" : " opacity-0")}>Adicionar</div>
            </div>
        </div>
    </>
}
