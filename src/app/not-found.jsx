import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center flex-col gap-4">
            <h1 className='font-bold text-3xl text-purple-500'>This Page is not found!</h1>

            <Link href="/" className="text-blue-500 hover:underline">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Go back home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;