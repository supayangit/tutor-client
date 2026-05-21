"use client";

import React from "react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane
} from "react-icons/fa";

import { HiOutlineAcademicCap } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="border-t border-violet-100 bg-gradient-to-b from-white to-violet-50/40">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Column */}
                <div className="space-y-5">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group w-fit"
                    >
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-200 transition group-hover:scale-105">
                            <HiOutlineAcademicCap className="text-white text-2xl" />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                MediQueue
                            </h2>

                            <p className="text-[11px] text-violet-600 font-medium -mt-0.5">
                                Smart Tutor Booking
                            </p>
                        </div>
                    </Link>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-gray-600 max-w-md">
                        Simplifying tutor booking with organized scheduling,
                        smarter learning sessions, and seamless student-tutor connections.
                    </p>

                    {/* Socials */}
                    <div className="flex items-center gap-3 pt-1">

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white border border-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white transition shadow-sm"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white border border-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white transition shadow-sm"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-xl bg-white border border-violet-100 flex items-center justify-center text-violet-600 hover:bg-violet-600 hover:text-white transition shadow-sm"
                        >
                            <FaTelegramPlane />
                        </Link>

                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:items-end justify-between">

                    {/* Links */}
                    <div className="space-y-4 text-sm font-medium">

                        <Link
                            href="/tutors"
                            className="block text-gray-600 hover:text-violet-600 transition"
                        >
                            Browse Tutors
                        </Link>

                        <Link
                            href="/add-tutor"
                            className="block text-gray-600 hover:text-violet-600 transition"
                        >
                            Become a Tutor
                        </Link>

                        <Link
                            href="/contact"
                            className="block text-gray-600 hover:text-violet-600 transition"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/terms"
                            className="block text-gray-600 hover:text-violet-600 transition"
                        >
                            Terms & Privacy
                        </Link>

                    </div>

                    {/* Copyright */}
                    <div className="mt-10 md:text-right text-sm text-gray-500">
                        © 2026 MediQueue <br />
                        Crafted by Supayan C.
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;