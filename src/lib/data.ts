interface NavbarItem {
  label: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/Shop" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

export interface Category {
  id: number;
  image: string;
  name: string;
  items: number;
}

export const categories: Category[] = [
  {
    id: 1,
    image: "/capsule.svg",
    name: "Medician",
    items: 32,
  },
  {
    id: 2,
    image: "/heart.svg",
    name: "Health care",
    items: 20,
  },
  {
    id: 3,
    image: "/leaf.svg",
    name: "Beauty care",
    items: 30,
  },
  {
    id: 4,
    image: "/heartbeat.svg",
    name: "Fitness",
    items: 35,
  },
  {
    id: 5,
    image: "/vials.svg",
    name: "Lab Equipment",
    items: 120,
  },
  {
    id: 6,
    image: "/briefcase-medical-plus.svg",
    name: "Medkits",
    items: 25,
  },
];

export interface Product {
  id: number;
  name: string;
  image: string;
  desc?: string;
  price?: number;
}

export interface ProductApi {
  _id: string;
  name: string;
  image: string;
  desc?: string;
  price?: number;
}
export const categoriesProducts: Product[] = [
  {
    id: 1,
    name: "Sanitizer",
    image: "/sanitizer.svg",
    desc: "Hand sanitizer collection ",
  },
  {
    id: 2,
    name: "Top deals",
    image: "/rb.svg",
    desc: "Face wash sale collection ",
  },
  {
    id: 3,
    name: "Face mask",
    image: "/realistic-medical-mask.svg",
    desc: "Facial mask deals save up to 50%",
  },
];

export const LatestProduct: Product[] = [
  {
    id: 1,
    name: "Microscope",
    image: "/microscope.svg",
    price: 45.0,
  },
  {
    id: 2,
    name: "Pulse oximeter",
    image: "/spulse-oximeter.svg",
    price: 19.0,
  },
  {
    id: 3,
    name: "Vitamin serum",
    image: "/vitamin.png",
    price: 20.0,
  },
  {
    id: 4,
    name: "High Poritein",
    image: "/microscope.svg",
    price: 50.0,
  },
];

export const collectionstore: Product[] = [
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

export const Shop = [
  {
    id: 1,
    image: "/shop/photo1.svg",
  },
  {
    id: 2,
    image: "/shop/photo2.svg",
  },
  {
    id: 3,
    image: "/shop/photo3.svg",
  },
  {
    id: 4,
    image: "/shop/photo4.svg",
  },
];


export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  
];