/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Button from "@/components/shared/Button";
import {
  CreditCard,
  FolderSync,
  Headphones,
  ShoppingCart,
  Truck,
} from "lucide-react";
import RecentProducts from "@/components/Featuers/shop/recentProducts";
import { AnimatedTestimonialsDemo } from "@/components/Featuers/shop/AnimatedTestimonialsDemo";
import SectionHeading from "@/components/shared/SectionHeading";
import { useProductStore } from "@/store/useProductStore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams(); // ده الـ _id من الرابط
  const { products, setProducts } = useProductStore();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/products`);
        const allProducts = await res.json();

        // فلترة حسب _id
        const product = allProducts.find((item: any) => item._id === id);
        setData(product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <main>
      <div className="p-6 flex flex-col md:flex-row gap-10  items-start">
        <div className="bg-[#F2F2F2] p-4 rounded-lg">
          <Image
            src={data.image}
            alt={data.name}
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
        <div>
          <h4 className="text-[#503217] font-semibold text-5xl">{data.name}</h4>
          <p className="text-[#8F7D6A] text-md my-3 text-2xl">
            ${data.price} USD
          </p>
          <Button
            onClick={() => setProducts([...products, data])}
            text="Add to cart"
            icon={<ShoppingCart size={15} />}
          />
          <h5 className="text-[#503217] font-bold my-3">Product Description</h5>
          <p className="text-[#8F7D6A] mt-2 line-clamp-3">{data.desc}</p>
        </div>
      </div>

      <section className="flex justify-evenly flex-col md:flex-row gap-10 md:gap-0 pt-30 p-5 rounded-lg">
        <Feature icon={<Truck size={30} />} title="Free shipping" />
        <Feature icon={<FolderSync size={30} />} title="Easy refund" />
        <Feature icon={<Headphones size={30} />} title="Online support" />
        <Feature icon={<CreditCard size={30} />} title="Flexible payment" />
      </section>

      <section className="mt-20">
        <header>
          <SectionHeading title="Our happy clients" />
        </header>
        <AnimatedTestimonialsDemo />
      </section>

      <RecentProducts />
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center flex-col justify-center">
      <span className="text-[#503217]">{icon}</span>
      <h3 className="text-[#503217]">{title}</h3>
    </div>
  );
}
