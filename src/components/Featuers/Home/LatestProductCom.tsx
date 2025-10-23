import SectionHeading from "@/components/shared/SectionHeading";
import { LatestProduct } from "@/lib/data";
import { ShieldCheck, ArrowRightLeft, CreditCard } from "lucide-react";
import Image from "next/image";

const LatestProductCom = () => {
  return (
    <>
      {/* Section Heading */}
      <header className="mb-10">
        <SectionHeading title={"Latest health product"} />
      </header>

      {/* Latest Products */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-40 ">
        {LatestProduct.map((product) => (
          <div key={product.id} className="text-center">
            <div className="relative bg-[#F2F2F2] p-4 rounded-lg flex justify-center items-center h-[200px]">
              <span className="absolute top-2 left-2 bg-[#D3744A] text-[#EEEDE7] px-2 py-[2px] rounded text-xs">
                New
              </span>
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <h4 className="mt-3 text-[#503217] text-left">{product.name}</h4>
            <p className="text-[#8F7D6A] text-left text-sm">
              ${product.price} USD
            </p>
          </div>
        ))}
      </section>

      {/* Warranty / Features Section */}
      <section className=" flex justify-between flex-col md:flex-row gap-10 md:gap-0  p-5 rounded-lg ">
        <div className="flex  items-center sm:items-start gap-3">
          <div className="relative">
            <Image
              src="/VectorMokrah.svg"
              alt="Warranty Icon"
              width={70}
              height={70}
              className="relative z-10"
            />
            <span className="absolute top-4 left-5 text-[#503217] z-20">
              <ShieldCheck size={30} />
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#503217] ">30 days warranty</h3>
            <p className="text-[#8F7D6A] text-sm">
              Enjoy peace of mind with warranty
            </p>
          </div>
        </div>

        <div className="flex  items-center sm:items-start gap-3">
          <div className="relative">
            <Image
              src="/VectorMokrah.svg"
              alt="Fast Delivery"
              width={70}
              height={70}
              className="relative z-10"
            />
            <span className="absolute top-4 left-5 text-[#503217] z-20">
              <ArrowRightLeft size={30} />
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#503217] ">Exchange policy</h3>
            <p className="text-[#8F7D6A] text-sm">
              You’re satisfied with your purchase
            </p>
          </div>
        </div>

        <div className="flex items-center sm:items-start gap-3">
          <div className="relative">
            <Image
              src="/VectorMokrah.svg"
              alt="Quality Guarantee"
              width={70}
              height={70}
              className="relative z-10"
            />
            <span className="absolute top-4 left-5 text-[#503217] z-20">
              <CreditCard size={30} />
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#503217] ">Secure payment</h3>
            <p className="text-[#8F7D6A] text-sm">
              Shop with confidence every time
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProductCom;
