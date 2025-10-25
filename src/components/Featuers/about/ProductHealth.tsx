import Button from "@/components/shared/Button"
import SectionHeading from "@/components/shared/SectionHeading"
import { ChartScatter, CreditCard, Eye, FolderSync, Headphones, SquarePen, ThumbsUp, Truck } from "lucide-react"
import Image from "next/image"

const Producthealth = () => {
    return (
        <main>
            <span className="absolute" >
                <Image
                    src="/about/medicalshape.png"
                    alt="producthealth"
                    width={70}
                    height={50}
                    className="w-[70px] h-auto"
                />
            </span>
            <header className=" flex items-center justify-center">
                <h1 className="w-[700px] "> <SectionHeading title="Health products you can trust service you deserve" /></h1>
            </header>
            <section className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4">
                <div className="flex justify-center w-full md:w-auto">
                    <Image
                        src="/about/aboutone.png"
                        alt="producthealth"
                        width={332}
                        height={100}
                        className="w-[80%] sm:w-[250px] md:w-[332px] h-auto"
                    />
                </div>
                <div className="flex justify-center w-full md:w-auto">
                    <Image
                        src="/about/abouttwo.png"
                        alt="producthealth"
                        width={500}
                        height={100}
                        className="w-[90%] sm:w-[350px] md:w-[500px] h-auto"
                    />
                </div>
                <div className="flex justify-center w-full md:w-auto">
                    <Image
                        src="/about/aboutthree.png"
                        alt="producthealth"
                        width={333}
                        height={100}
                        className="w-[80%] sm:w-[250px] md:w-[333px] h-auto"
                    />
                </div>
            </section>
            <section className="pt-20 flex flex-col md:flex-row text-center  justify-center   md:justify-between  items-center gap-6 md:gap-16 lg:gap-24 text-[#503217] px-4 md:px-12">
                <h1 className="text-3xl md:text-4xl font-semibold whitespace-nowrap text-center">
                    About us
                </h1>
                <p className="text-base md:text-xl lg:text-2xl max-w-3xl leading-relaxed text-[#503217]">
                    Our focus is on nurturing wellness and empowering health for all ages well being for people worldwide.
                </p>
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
            <section className="pt-25 bg-[#E8E6DE] p-5 rounded-2xl">
                <h3 className="text-3xl py-10 md:text-4xl font-semibold text-center md:text-left text-[#503217]">
                    What to Expect When You Join <br className="hidden md:block" /> Our Team
                </h3>
                <div className="flex justify-between items-center gap-20 flex-col md:flex-row">
                    <div className="space-y-5">
                        <div className="flex gap-3 items-center">
                            <span className="  text-[#503217] ">
                                <ChartScatter size={30} />
                            </span>
                            <h3 className="text-[#8F7D6A] ">Mission</h3>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="  text-[#503217] ">
                                <ThumbsUp size={30} />
                            </span>
                            <h3 className="text-[#503217] text-2xl">Commitments</h3>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="  text-[#503217] ">
                                <Eye size={30} />
                            </span>
                            <h3 className="text-[#8F7D6A] ">Vision</h3>
                        </div>
                    </div>
                    <div className="flex md:items-end items-center text-center   gap-10 flex-col md:flex-row">
                        <Image
                            src="/about/aboutfour.png"
                            alt="producthealth"
                            width={240}
                            height={100}
                        // className="w-[90%] sm:w-[350px] md:w-[500px] h-auto"
                        />
                        <p className="text-[#8F7D6A] w-60 md:w-100 ">We&apos;re committed to supporting your health journey by offering valuable educational resources, wellness insights, and expert advice to help you make informed decisions.</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 mt-5 bg-[#F2F2F2] p-10 rounded-2xl">


                <div className="flex-1 w-full">
                    <h4 className="text-[#503217] text-2xl font-semibold mb-2">Join our trustable Medifit product  community</h4>
                    <p className="text-[#8F7D6A] mb-6">
                        Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.
                    </p>
                    <Button text="Get started" icon={<SquarePen size={15} />} />
                </div>
                <div className="flex-shrink-0  grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((client) => (
                        <Image
                            key={client}
                            src="/Mask group.svg"
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

export default Producthealth
