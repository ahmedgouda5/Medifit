"use client";

import React from "react";
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { Pointer, SquarePen } from "lucide-react";
import Image from "next/image";
import { Shop } from "@/lib/data";

const Contact = () => {
    return (
        <main className="">
            {/* Header Section */}
            <header className="text-center mb-12 relative">
                <SectionHeading title="Contact Us" />
            </header>
            <form>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium  mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border-2 border-[#503217] dark:border-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#503217] "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border-2 border-[#503217] dark:border-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#503217]  "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Phone number
                        </label>
                        <input
                            type="text"
                            placeholder="Your phone"
                            className="border-2 border-[#503217] dark:border-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#503217] "
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Schedule to receive call
                        </label>
                        <input
                            type="datetime-local"
                            className="border-2 border-[#503217] dark:border-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#503217] "
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                    </label>
                    <textarea
                        placeholder="Your message..."
                        rows={5}
                        className="border-2 border-[#503217] dark:border-gray-700 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#503217] "
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button text="Submit" icon={<Pointer size={15} />} />
                </div>
            </form>
            <section className="text-[#503217] flex justify-between items-start mt-20 flex-col md:flex-row gap-5 md:gap-0">
                <h3 className="text-3xl md:text-4xl font-semibold  text-center">Frequently Asked Questions</h3>
                <div className="space-y-2">
                    <div className="p-4 flex flex-col gap-4 border border-[#503217] rounded-lg">
                        <h4 className="text-2xl">What products do you offer?</h4>
                        <p className="text-[#8F7D6A] ">
                            We offer a wide range of products, including skincare, haircare, and
                            beauty accessories.
                        </p>
                    </div>
                    <div className="border border-[#503217] rounded-lg p-2">
                        <h4>How can I place an order?</h4>

                    </div>
                    <div className="border border-[#503217] rounded-lg p-2">
                        <h4>Do you provide home delivery?</h4>
                    </div>
                    <div className="border border-[#503217] rounded-lg p-2">
                        <h4>Can I return or exchange products?</h4>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12 bg-[#F2F2F2] p-10 rounded-2xl">
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
    );
};

export default Contact;
