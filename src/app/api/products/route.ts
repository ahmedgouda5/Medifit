import { NextResponse } from "next/server";

export async function GET() {

  const data = [
    {
      id: 1,
      name: "B12 medicine",
      image: "/Grouppar.svg",
      price: 19.0,
      desc: "Vitamin B12 supplement that helps boost energy levels, support brain function, and improve overall vitality.",
    },
    {
      id: 2,
      name: "Tonometer",
      image: "/medical-device.svg",
      price: 20.0,
      desc: "Accurate and easy-to-use tonometer designed to measure intraocular pressure for effective eye health monitoring.",
    },
    {
      id: 3,
      name: "ECG cardiograph",
      image: "/medical-device2.svg",
      price: 15.0,
      desc: "Portable ECG cardiograph device that records the electrical activity of the heart for quick diagnosis.",
    },
    {
      id: 4,
      name: "Blood glucose meter",
      image: "/medical-device3.svg",
      price: 25.0,
      desc: "Compact glucose meter providing fast and precise blood sugar readings to help manage diabetes effectively.",
    },
    {
      id: 5,
      name: "Lab hand gloves",
      image: "/medical-protecti4.svg",
      price: 20.0,
      desc: "High-quality disposable laboratory gloves offering excellent protection and comfort during lab work or procedures.",
    },
    {
      id: 6,
      name: "Stethoscope",
      image: "/health5.svg",
      price: 14.0,
      desc: "Durable and lightweight stethoscope with high acoustic sensitivity for professional and home medical use.",
    },
    {
      id: 7,
      name: "Inhaler pressure drop",
      image: "/blue-asthma5.svg",
      price: 33.0,
      desc: "Efficient inhaler designed to deliver medication directly to the lungs for quick asthma and allergy relief.",
    },
    {
      id: 8,
      name: "Multi vitamin",
      image: "/Groupggg.svg",
      price: 32.0,
      desc: "Daily multivitamin supplement formulated to support immune system health, energy production, and wellness.",
    },
  ];

  return NextResponse.json({
    data,
  });
}
