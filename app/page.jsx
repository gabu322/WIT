import Button from "@components/Button";
import Link from "next/link";
import "@styles/globals.css";

export default function Home() {
    return <main>
        <div className='flex justify-between w-3/5 m-auto p-4 items-center flex-wrap mainContent'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl font-bold'>Next.js</h1>
                <p className='text-xl'>with Tailwind CSS</p>
            </div>
            <div className='w-full md:w-1/2'>
            </div>
        </div>
    </main>
}
