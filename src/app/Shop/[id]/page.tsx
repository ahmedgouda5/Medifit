"use client";
import Image from "next/image";
import { collectionstore, Shop } from "@/lib/data";
import Button from "@/components/shared/Button";
import {
  CreditCard,
  FolderSync,
  Headphones,
  ShoppingCart,
  SquarePen,
  Truck,
} from "lucide-react";
import RecentProducts from "@/components/Featuers/shop/recentProducts";
import { AnimatedTestimonialsDemo } from "@/components/Featuers/shop/AnimatedTestimonialsDemo";
import SectionHeading from "@/components/shared/SectionHeading";
import { useProductStore } from "@/store/useProductStore";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const { products, setProducts } = useProductStore();

  const data = collectionstore.find((item) => item.id === Number(id));

  if (!data) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <main>
      <div className="p-6 flex flex-col md:flex-row gap-10 justify-between items-start">
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

      <section className="flex flex-col md:flex-row items-center justify-between gap-10 mt-5 bg-[#F2F2F2] p-10 rounded-2xl">
        <div className="flex-1 w-full">
          <h4 className="text-[#503217] text-2xl font-semibold mb-2">
            Join our trustable Medifit product community
          </h4>
          <p className="text-[#8F7D6A] mb-6">
            Join us as we build a community where wellness is accessible,
            education is empowering, and health is a shared journey.
          </p>
          <Button text="Get started" icon={<SquarePen size={15} />} />
        </div>
        <div className="flex-shrink-0 grid grid-cols-2 gap-4">
          {Shop.map((pec) => (
            <Image
              key={pec.id}
              src={pec.image}
              alt="collectionstore"
              width={200}
              height={450}
              className="rounded-xl object-cover"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

// مكون فرعي عشان يقلل التكرار
function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center flex-col justify-center">
      <span className="text-[#503217]">{icon}</span>
      <h3 className="text-[#503217]">{title}</h3>
    </div>
  );
}
