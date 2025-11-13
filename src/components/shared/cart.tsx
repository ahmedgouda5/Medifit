"use client";

import { FiShoppingCart } from "react-icons/fi";
import { useEffect } from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { Button } from "../ui/button";
import { useProductStore } from "@/store/useProductStore";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart = ({ open, onClose }: CartProps) => {
  const { products, removeProduct, setProducts } = useProductStore();

  // لمنع scroll أثناء فتح الكارت
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);


  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-0 transition-opacity duration-300 ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[36%] h-screen z-20 bg-[#EEEDE7] text-[#503217] p-5 shadow-lg transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center space-y-1">
            <FiShoppingCart className="text-6xl mb-4" />
            <h3>Your shopping cart is currently empty!</h3>
            <p>Explore our products and add items to your cart to proceed with your purchase.</p>
            <Button className="mt-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-2 px-4 rounded-full">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* قائمة المنتجات */}
            <div className="overflow-y-auto flex-1 space-y-4 pr-1">
              {products.map((item,index) => (
                <div
                 key={`${item.id}-${index}`} 
                  className="flex items-center justify-between border-b-2 pb-3"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ${item.price} USD
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 text-2xl hover:text-red-700"
                    onClick={() => removeProduct(item.id)}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* إجمالي السعر وزر تفريغ السلة */}
            <div className="pt-4 border-t mt-4 space-y-2">
              
              <div className="flex gap-2">
                <Button
                  onClick={() => setProducts([])}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-full"
                >
                  Clear Cart
                </Button>
                <Button className="flex-1 bg-[#503217] dark:bg-white dark:text-gray-900 text-white py-2 rounded-full">
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
