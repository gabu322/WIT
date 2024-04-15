'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Menu() {
    const [isHovered, setIsHovered] = useState(false);

    return <>
        <div className='w-16 h-screen flex-none' />

        <aside className={`w-16 h-screen ${isHovered ? 'hover:w-64' : ''} fixed left-0 top-0 p-5 transition-all bg-[#101317] flex flex-col gap-6 text-white font-medium overflow-hidden z-50`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-shrink-0">
                <Image src="/logo.png" width={24} height={24} />
            </div>

            <div className="flex flex-row gap-4">
                <Image src="/icons/white/list.svg" width={24} height={24} />
                <Link href="/products" className={"transition-all " + (isHovered ? " opacity-100" : " opacity-0")}>Visualizar</Link>
            </div>

            <div className="flex flex-row gap-4">
                <Image src="/icons/white/add.svg" width={24} height={24} />
                <Link href="/products/0" className={"transition-all " + (isHovered ? " opacity-100" : " opacity-0")}>Adicionar</Link>
            </div>

        </aside>
    </>
}
