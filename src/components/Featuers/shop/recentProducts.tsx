import SectionHeading from '@/components/shared/SectionHeading'
import { LatestProduct } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const RecentProducts = () => {
  return (
    <main>
      <header className="mb-10">
        <SectionHeading title={"Recent Products"} />
      </header>
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
    </main>
  )
}

export default RecentProducts
