"use client";

import { useCallback, useState } from "react";
import { navbarItems } from "@/lib/data";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  return (








    <nav>
      <div className="flex justify-between items-center">
        <h1 className="flex items-center font-semibold text-[#503217] text-xl">
          <Image src="/logo.svg" alt="Logo" width={25} height={25} />
          Medifit
        </h1>

        <button
          className="md:hidden text-[#503217]"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`flex flex-col md:flex-row md:static absolute z-50 top-14 left-0 w-full md:w-auto bg-white md:bg-transparent md:space-x-10 space-y-4 md:space-y-0 px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible md:visible md:opacity-100"
            }`}
        >
          {navbarItems.map((item) => (
            <li key={item.href} className="text-center">
              <Link
                href={item.href}
                className="block text-[#503217] font-medium hover:text-[#7a502c]"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="flex justify-center md:hidden" onClick={toggleMenu}>
            <div className="relative text-[#503217]">
              <ShoppingCart />
              <span className="absolute -top-3 left-4 text-sm font-semibold">0</span>
            </div>
          </li>
        </ul>

        <div className="relative hidden md:flex text-[#503217]">
          <ShoppingCart />
          <span className="absolute -top-3 left-4 text-sm font-semibold">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
