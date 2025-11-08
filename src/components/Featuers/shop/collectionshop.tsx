"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Collectionshop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products"); // relative URL
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  return (
    <main>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/Shop/${product.id}`}
            className="text-center cursor-pointer"
          >
            <div className="bg-[#F2F2F2] p-4 rounded-lg flex justify-center items-center h-[200px]">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <h4 className="mt-3 text-[#503217] text-left font-semibold">
              {product.name}
            </h4>
            <p className="text-[#8F7D6A] text-left text-sm">
              ${product.price} USD
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}
