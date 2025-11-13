"use client";

import { UpdateProductDialog } from "@/components/Featuers/shop/UpdateProduct";
import Button from "@/components/shared/Button";
import { ProductApi } from "@/lib/data";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<ProductApi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // حذف المنتج
  const deleteProduct = async (productId: string) => {
    try {
      const res = await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: productId }),
      });
      if (!res.ok) throw new Error("Failed to delete product");

      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
      {products.map((product: ProductApi) => (
        <div key={product._id} className="text-center">
          <div className="w-full group relative aspect-square flex items-center justify-center rounded">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
            <div className="hidden group-hover:flex absolute inset-0 bg-black opacity-70 justify-center items-center gap-2">
              <Button
                onClick={() => deleteProduct(product._id)}
                text="Delete"
                icon={<Trash2 size={16} />}
              />
              <UpdateProductDialog
                product={product}
                onUpdate={(updated) => {
                  setProducts((prev) => prev.map(p => p._id === updated._id ? updated : p));
                }}
              />
            </div>
          </div>
          <h4 className="mt-3 text-[#503217] text-left font-semibold">{product.name}</h4>
          <p className="text-[#8F7D6A] text-left text-sm">${product.price} USD</p>
        </div>
      ))}
    </section>
  );
};

export default Page;
