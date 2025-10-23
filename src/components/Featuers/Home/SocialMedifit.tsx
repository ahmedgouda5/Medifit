import SectionHeading from "@/components/shared/SectionHeading"
import { Instagram } from "lucide-react"
import Image from "next/image"

const SocialMedifit = () => {
    return (
        <main>
            <header className="font-bold">
                <SectionHeading title="Follow us @medifit" />
            </header>
            <section className="flex justify-evenly gap-10 md:gap-3 flex-wrap">
                <div>
                    <Image src="/Maskgroup999.png" alt="medifit" width={250} height={20} loading="lazy" priority={false} />

                </div>
                <div className="relative w-fit">
                    <Image src="/vdufdwf.png" className="opacity-40 rounded-t-full" alt="medifit" width={250} height={20} loading="lazy" priority={false} />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <Instagram size={20} className="text-[#503217] mt-3" />
                        <h3 className="text-[#503217] font-bold">@medifit</h3>
                    </div>
                </div>
                <div>
                    <Image src="/Maskgroup.333.png" alt="medifit" width={250} height={20} loading="lazy" priority={false} />
                </div>
                <div>
                    <Image src="/Maskgroupsecoa2.png" alt="medifit" width={250} height={20} loading="lazy" priority={false} />
                </div>
            </section>
        </main>
    )
}

export default SocialMedifit
