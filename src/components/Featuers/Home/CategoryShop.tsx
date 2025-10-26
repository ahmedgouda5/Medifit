import React from "react";
import { categories, categoriesProducts } from "@/lib/data";
import Image from "next/image";
import { Handbag } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const CategoryShop = () => {
  return (
    <div className="pt-[30px] md:pb-[180px] pb-[100px] px-4">
      <header>
        <SectionHeading title={"Shop by Category"} />
      </header>

      <main>
        <section
          className="
            flex flex-wrap md:flex-nowrap justify-center sm:justify-between items-center gap-2
          "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="
                flex items-center flex-col gap-2 w-[200px] p-[10px] py-10 border-2 rounded-lg
              "
            >
              <div className="border-4 border-dotted rounded-full p-[20px] bg-[#E2DFCF]">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-[#503217]">{category.name}</h3>
              <p className="text-sm text-[#8F7D6A]">{category.items} items</p>
            </div>
          ))}
        </section>

        <section className="flex gap-5 justify-center flex-wrap mt-[100px]">
          {categoriesProducts.map((product) => (
            <div
              key={product.id}
              className="flex bg-[#F2F2F2] p-4 rounded-lg justify-between items-center w-[300px]"
            >
              <div className="flex flex-col items-start gap-3">
                <h4 className="bg-[#D3744A] text-[#EEEDE7] p-1 rounded text-sm ">{product.name}</h4>
                <p className="text-[#503217]">{product.desc}</p>
                <button className="text-[#8F7D6A] border-b-2 border-[#8F7D6A] flex items-center gap-1"><Handbag size={20} />shop now</button>
              </div>
              <div>
                <Image
                  src={product.image || "/vitamin.svg"} alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CategoryShop;
