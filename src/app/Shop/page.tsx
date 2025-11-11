import { AnimatedTestimonialsDemo } from '@/components/Featuers/shop/AnimatedTestimonialsDemo'
import Collectionshop from '@/components/Featuers/shop/collectionshop'
import SectionHeading from '@/components/shared/SectionHeading'
const { CreditCard, FolderSync, Headphones, SquarePen, Truck } = await import("lucide-react"); 
import React from 'react'
import Button from "@/components/shared/Button"
import Image from 'next/image'
import RecentProducts from '@/components/Featuers/shop/recentProducts'
import { Shop } from '@/lib/data'

const page = async () => {
   

    return (
        <main>
            <section>
                <Collectionshop />
            </section>
            <section className=" flex justify-evenly flex-col md:flex-row gap-10 md:gap-0 pt-30  p-5 rounded-lg ">
                <div className="flex  items-center flex-col justify-center">
                    <span className="  text-[#503217] ">
                        <Truck size={30} />
                    </span>
                    <h3 className="text-[#503217] ">Free shipping</h3>
                </div>
                <div className="flex  items-center flex-col justify-center">
                    <span className="  text-[#503217] ">
                        <FolderSync size={30} />
                    </span>
                    <h3 className="text-[#503217] ">Easy refund</h3>
                </div>
                <div className="flex  items-center flex-col justify-center">
                    <span className="  text-[#503217] ">
                        <Headphones size={30} />
                    </span>
                    <h3 className="text-[#503217] ">Online support</h3>
                </div>
                <div className="flex  items-center flex-col justify-center">
                    <span className="  text-[#503217] ">
                        <CreditCard size={30} />
                    </span>
                    <h3 className="text-[#503217] ">Fexible payment</h3>
                </div>
            </section>
            <section className='mt-20'>
                <header>
                    <SectionHeading title="Our happy clients" />
                </header>
                <AnimatedTestimonialsDemo />
            </section>
            <RecentProducts/>
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 mt-5 bg-[#F2F2F2] p-10 rounded-2xl">
                <div className="flex-1 w-full">
                    <h4 className="text-[#503217] text-2xl font-semibold mb-2">Join our trustable Medifit product  community</h4>
                    <p className="text-[#8F7D6A] mb-6">
                        Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
                    </p>
                    <Button text="Get started" icon={<SquarePen size={15} />} />
                </div>
                <div className="flex-shrink-0  grid grid-cols-2 gap-4">
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
    )
}

export default page
