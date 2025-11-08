import { cache } from "react";
import { Product } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const getProducts = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    next: { revalidate: 60 }, // يتحدث كل دقيقة
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
});

export default async function Collectionshop() {
  const data = await getProducts();
  const products: Product[] = data.data;

  return (
    <main>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
        {products.map((product) => (
          <Link
            prefetch
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
