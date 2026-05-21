"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ mobile, session }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Tutors" },

    ...(session?.user
      ? [
          { href: "/add-tutor", label: "Add Tutor" },
          { href: "/my-tutors", label: "My Tutors" },
          { href: "/my-bookings", label: "My Sessions" },
        ]
      : []),
  ];

  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-5 mt-4 text-[15px] font-medium text-gray-700"
          : "flex items-center gap-8 text-sm font-medium text-gray-700"
      }
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition duration-200 relative hover:text-violet-600 ${
              isActive
                ? "text-violet-700 font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.label}

            {isActive && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-violet-600 rounded-full"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;