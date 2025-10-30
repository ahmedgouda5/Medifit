"use client";

import { useCallback, useState } from "react";
import { collectionstore, navbarItems } from "@/lib/data";
import { ShoppingCart, Menu, X, LogIn, Pocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cart from "./cart";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Button from "./Button";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(collectionstore);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1
            className="flex items-center cursor-pointer font-semibold text-[#503217] text-xl"
            onClick={() => router.push("/")}
          >
            <Image src="/logo.svg" alt="Logo" width={25} height={25} />
            <span className="ml-2">Medifit</span>
          </h1>

          {/* Menu Button for Mobile */}
          <button
            className="md:hidden text-[#503217]"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu Items */}
          <ul
            className={`flex flex-col md:flex-row md:static absolute z-50 top-14 left-0 w-full md:w-auto bg-white md:bg-transparent md:space-x-10 space-y-4 md:space-y-0 px-6 py-4 md:p-0 transition-all duration-300 ease-in-out transform ${isMenuOpen
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-4 invisible md:visible md:opacity-100 md:translate-y-0"
              }`}
          >
            {navbarItems.map((item) => (
              <li key={item.href} className="text-center">
                <Link
                  href={item.href}
                  className="block text-[#503217] font-medium hover:text-[#7a502c] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Cart */}
            <li
              className="flex justify-center md:hidden"
              onClick={() => setIsCartOpen(true)}
            >
              <div className="relative text-[#503217]">
                <ShoppingCart />
                <span className="absolute -top-3 left-4 text-sm font-semibold">
                  {cartItems.length}
                </span>
              </div>
            </li>

            {/* Mobile Auth Section */}
            <li className="md:hidden flex justify-center items-center">
              <SignedOut>
                <div className="flex gap-3">
                  <SignInButton mode="modal">
                    <Button text="Sign In" icon={<LogIn size={15} />} />
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button text="Sign Up" icon={<Pocket size={15} />} />
                  </SignUpButton>
                </div>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <SignedOut>
              <div className="flex gap-3">
                <SignInButton mode="modal">
                  <Button text="Sign In" icon={<LogIn size={15} />} />

                </SignInButton>
                <SignUpButton mode="modal">
                  <Button text="Sign Up" icon={<Pocket  size={15} />} />
                </SignUpButton>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <div
              className="relative text-[#503217] cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart />
              <span className="absolute -top-3 left-4 text-sm font-semibold">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <Cart
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Navbar;
