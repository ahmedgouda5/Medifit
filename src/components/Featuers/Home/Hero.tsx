import { Handbag } from "lucide-react";
import Button from "../../shared/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="  flex flex-col-reverse sm:flex-row justify-between items-center relative z-10  sm:gap-0  sm:px-0">
      <div className="space-y-3 text-center sm:text-left">
        <h1 className="text-4xl sm:text-[70px] font-bold text-[#503217] leading-tight">
          Your trusted <br /> care now <br /> and always
        </h1>
        <p className="text-[#8F7D6A] max-w-[415px] mx-auto sm:mx-0">
          For the best results, align your health needs with your medication
          plan.
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link href="/Shop">   <Button text="Shop now" icon={<Handbag size={15} />} /></Link>
        </div>
      </div>

      <div className="flex justify-center sm:justify-end">
        <Image
          src="/Medifit.webp"
          alt="Hero Image"
          width={500}
          height={500}
          loading="eager"
          className="w-[250px] sm:w-[500px] "
        />
      </div>
    </div>
  );
};

export default Hero;
