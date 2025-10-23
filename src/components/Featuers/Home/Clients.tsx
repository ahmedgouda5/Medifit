import SectionHeading from '@/components/shared/SectionHeading'
import Image from 'next/image'
import React from 'react'

const Clients = () => {
    return (
        <main>
            <header>
                <SectionHeading title="Our happy clients" />
            </header>
            <section className='rounded-2xl bg-[#F2F2F2] items-center md:items-start p-10 flex gap-10 flex-col md:flex-row'>
                <Image src="/fi_11029023.png" alt="client" width={100} height={100} />
                <p className='text-[#8F7D6A] text-sm'>I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.</p>
            </section>
            <section className='flex justify-evenly items-center md:items-start gap-20 md:gap-10 mt-20 flex-col md:flex-row  '>
                {[1, 2, 3].map((client) => (
                    <div key={client} className='flex items-center gap-2 flex-col md:flex-row'>
                        <Image src="/man-with-his-arms-crossed-smiling 4.png" className='rounded-full' alt="client" width={50} height={50} />
                        <div>
                            <h4 className='text-[#503217] text-left font-semibold'>John Doe</h4>
                            <p className='text-[#8F7D6A] text-left text-sm'>Customer</p>
                        </div>

                    </div>
                ))}
            </section>
        </main>
    )
}

export default Clients