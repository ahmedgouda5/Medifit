import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { collectionstore } from "@/lib/data";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import React from "react";

const CollectionStore = () => {
  return (
    <div>
      <header>
        <SectionHeading title="Explore Our Store Collection" />
      </header>

      <main className="py-5 l">
        {/* Products Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-40">
          {collectionstore.map((product) => (
            <div key={product.id} className="text-center">
              <div className="bg-[#F2F2F2] p-4 rounded-lg flex justify-center items-center h-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h4 className="mt-3 text-[#503217] text-left font-semibold">{product.name}</h4>
              <p className="text-[#8F7D6A] text-left text-sm">${product.price} USD</p>
            </div>
          ))}
        </section>

        {/* Newsletter Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#F2F2F2] p-10 rounded-2xl">
          <div className="flex-shrink-0">
            <Image
              src="/Mask group.svg"
              alt="collectionstore"
              width={450}
              height={450}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex-1 w-full">
            <h4 className="text-[#503217] text-2xl font-semibold mb-2">Join our newsletter</h4>
            <p className="text-[#8F7D6A] mb-6">
              Sign up now and get an instant 15% discount on your first purchase.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email "
                className="w-full sm:flex-1 border border-[#CFCFCF] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#503217] text-sm"
              />
              <Button text="Subscribe" icon={<SquarePen size={15} />} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CollectionStore;
