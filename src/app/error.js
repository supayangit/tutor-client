"use client";

import React, { useEffect } from "react";

const Error = ({ error, reset }) => {

    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-violet-50 px-4">

            <div className="text-center max-w-md">

                {/* Icon / Title */}
                <h1 className="text-4xl font-bold text-red-500">
                    Something Went Wrong
                </h1>

                {/* Message */}
                <p className="mt-3 text-gray-600">
                    An unexpected error occurred. Please try again.
                </p>

                {/* Error detail (optional but useful for dev) */}
                <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-500 overflow-auto">
                    {error?.message}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-center gap-4">

                    <button
                        onClick={() => {
                            reset();
                            setTimeout(() => {
                                window.location.reload();
                            }, 100);
                        }}
                        className="px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition shadow-md"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => (window.location.href = "/")}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                    >
                        Go Home
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Error;