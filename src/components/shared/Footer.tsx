import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-[#503217] py-12 ">
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="font-bold text-lg mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#a77447]">Home</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Shop</a></li>
            <li><a href="#" className="hover:text-[#a77447]">About</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Contact</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Blog</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#a77447]">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Utility</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#a77447]">Style guide</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Instruction</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Changelog</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Licenses</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Link in bio</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Error 404</a></li>
            <li><a href="#" className="hover:text-[#a77447]">Password protected</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-start items-center  text-center ">
          <div className="flex flex-col items-center  mb-4">
            <h1 className="flex items-center justify-center  font-semibold text-[#503217] text-xl mb-3">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={25}
                height={25}
                className=""
              />
              Medifit
            </h1>
            <p className="">
              We provide the ultimate solution for your online store and all the healthcare needs.
            </p>
          </div>

          <div className="flex gap-4 text-[#503217] mt-2">
            <FaFacebookF className="hover:text-[#a77447] cursor-pointer transition-colors duration-200" />
            <FaInstagram className="hover:text-[#a77447] cursor-pointer transition-colors duration-200" />
            <FaLinkedinIn className="hover:text-[#a77447] cursor-pointer transition-colors duration-200" />
            <FaTwitter className="hover:text-[#a77447] cursor-pointer transition-colors duration-200" />
            <FaYoutube className="hover:text-[#a77447] cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* Address + Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Address</h3>
          <p className="text-sm mb-2 leading-relaxed">
            1640 Parker Rd, Allentown, <br /> New Mexico 31134
          </p>

          <h3 className="font-bold text-lg mb-2 mt-4">Contact</h3>
          <p className="text-sm">hello@gmail.com</p>
          <p className="text-sm">(200) 555-0104</p>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-[#d9cfc3] mt-10 pt-4 text-center text-sm text-[#503217]">
        Design By <span className="font-semibold">Ahmed Gouda</span>, Powered By <span className="font-semibold"><Link href="https://portfolio-two-lemon-69.vercel.app/" target="_blank">Goudeawy</Link></span>
      </div>
    </footer>
  );
}
