"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { authClient } from "@/lib/auth-client";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

const Header = () => {
  const { data: session, isPending } = authClient.useSession();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          closeMenu();
          window.location.href = "/signin";
        },
      },
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-violet-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-200 transition group-hover:scale-105">
            <HiOutlineAcademicCap className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              MediQueue
            </h1>

            <p className="text-[11px] text-violet-600 font-medium -mt-0.5">
              Smart Tutor Booking
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Navbar session={session} />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* User Info */}
          <div className="hidden sm:block text-right">
            {isPending ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            ) : (
              <>
                <p className="text-xs text-gray-500">
                  Welcome Back
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  {session?.user?.name || "Guest"}
                </p>
              </>
            )}
          </div>

          {/* User Image */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-violet-200 shadow-sm">
            {!isPending && (
              <Image
                src={session?.user?.image || "/assets/user.png"}
                alt="user"
                fill
                sizes="40px"
                className="object-cover"
              />
            )}
          </div>

          {/* Desktop Auth */}
          <div className="hidden sm:block">
            {isPending ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-9 w-24 bg-gray-200 rounded-xl"></div>
              </div>
            ) : session?.user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  closeMenu();
                }}
                className="px-5 py-2.5 rounded-xl bg-violet-50 text-violet-700 font-medium hover:bg-violet-100 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signin"
                className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition shadow-md shadow-violet-200"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-violet-100 bg-white px-5 py-5 space-y-5 shadow-xl"
        >
          <div onClick={closeMenu}>
            <Navbar mobile session={session} />
          </div>

          <div className="pt-2">
            {session?.user ? (
              <button
                onClick={() => {
                  handleSignOut();
                  closeMenu();
                }}
                className="w-full py-3 rounded-xl bg-violet-50 text-violet-700 font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signin"
                onClick={closeMenu}
                className="block text-center py-3 rounded-xl bg-violet-600 text-white font-medium"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;