"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-50 px-4">
            
            <div className="text-center max-w-md">

                {/* 404 Number */}
                <h1 className="text-8xl font-extrabold text-violet-600">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-2 text-gray-600">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-center gap-4">

                    <Link href="/">
                        <button className="px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition shadow-md">
                            Go Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-6 py-3 border border-violet-200 text-violet-600 rounded-xl hover:bg-violet-50 transition"
                    >
                        Go Back
                    </button>

                </div>

            </div>

        </div>
    );
};

export default NotFound;