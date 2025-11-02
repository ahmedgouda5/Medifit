"use client";
import { Product } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Collectionshop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const[userId,setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
      setProducts(data.data);
      setUserId(data.userId);
    })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔹 useEffect جديدة علشان تراقب التغيير وتطبع بعد التحديث
  useEffect(() => {
    console.log("✅ Products after fetch:", products,userId);

  }, [products]);

  return (
    <main>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center cursor-pointer"
            onClick={() => router.push(`/Shop/${product.id}`)}
          >
            <div className="bg-[#F2F2F2] p-4 rounded-lg flex justify-center items-center h-[200px]">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h4 className="mt-3 text-[#503217] text-left font-semibold">
              {product.name}
            </h4>
            <p className="text-[#8F7D6A] text-left text-sm">
              ${product.price} USD
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Collectionshop;
