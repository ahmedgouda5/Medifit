"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AddProductDialog } from "./AddProduct";
import MyAnimation from "@/components/shared/animation";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export default function CollectionShop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.data || data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center"><MyAnimation/></div>;
  }

  return (
   <main className="space-y-[30px]">
  <section>
    <AddProductDialog />
  </section>

  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
    {products.map((product) => (
      <Link
        key={product._id}
        href={`/Shop/${product._id}`}
        className="text-center cursor-pointer"
      >
        <div className="w-full aspect-square  flex items-center justify-center p-2 rounded">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover w-full h-full"
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
