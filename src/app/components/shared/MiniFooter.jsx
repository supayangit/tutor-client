"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineAcademicCap } from "react-icons/hi";

const MiniFooter = () => {
    return (
        <footer className="border-t border-violet-100 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* Left */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-200 transition group-hover:scale-105">
                        <HiOutlineAcademicCap className="text-white text-xl" />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold tracking-tight text-gray-900">
                            MediQueue
                        </h2>

                        <p className="text-[11px] text-violet-600 font-medium -mt-0.5">
                            Smart Tutor Booking
                        </p>
                    </div>
                </Link>

                {/* Center */}
                <div className="text-center text-sm text-gray-500 leading-relaxed">
                    © 2026 MediQueue. Crafted with care for smarter learning experiences.
                </div>

                {/* Right */}
                <div className="flex items-center gap-5 text-sm font-medium">
                    <Link
                        href="/privacy"
                        className="text-gray-600 hover:text-violet-600 transition"
                    >
                        Privacy
                    </Link>

                    <Link
                        href="/terms"
                        className="text-gray-600 hover:text-violet-600 transition"
                    >
                        Terms
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-600 hover:text-violet-600 transition"
                    >
                        Contact
                    </Link>
                </div>

            </div>
        </footer>
    );
};

export default MiniFooter;