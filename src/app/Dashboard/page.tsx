import { Product } from "@/lib/data";
import Image from "next/image";
import React, { use } from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const Page = () => {
  const products = use(getProducts());
  console.log(products);
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
      {products.map((product: Product) => (
        <div
          key={product.name}
          className="text-center"
        >
          <div className="w-full aspect-square flex items-center justify-center p-2 rounded">
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
        </div>
      ))}
    </section>
  );
};

export default Page;
