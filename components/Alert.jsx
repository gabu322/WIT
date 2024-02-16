'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Alert({ error, color }) {

    const [showAlert, setShowAlert] = useState(false);

    return <div className='w-screen h-screen bg-slate-800/40 absolute top-0  flex justify-center items-center z-50'>
        <div className='w-1/4 mx-auto bg-white rounded-lg shadow-lg flex flex-col justify-between'>
            <div className="w-full p-4 rounded-t-lg bg-red-600 text-2xl font-bold text-white">Erro {error.response.status}</div>
            <div className="w-full h-full flex flex-col justify-between gap-4 p-4 ">
                <p>{error.response?.data}</p>
                <div className="flex justify-end">
                    <Button color="grey"
                    onClick={() => window.history.back()} text='Voltar' />
                </div>
            </div>
        </div>
    </div>;
}
