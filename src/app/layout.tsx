import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Medifit",
  description: "Shop trusted medical supplies, healthcare products, and medicines online — fast delivery, genuine quality, and affordable prices.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased bg-[#EEEDE7]`} >
          <nav className="py-4 px-[30px] md:px-[100px] bg-[#F2F2F2]">
            <Navbar />
          </nav>
          <div className=" min-h-screen  px-[30px] md:px-[100px] md:pt-[80px] pt-[50px] ">
            {children}
            <Toaster position="top-right" reverseOrder={false} />

          </div>
          <footer className="mt-[50px] bg-[#E8E6DE]  px-[30px] md:px-[100px] ">
            <Footer />
          </footer>
        </body>
      </html >
    </ClerkProvider>

  );
}
