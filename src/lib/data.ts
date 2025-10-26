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
    image: "/about/vitamin.svg",
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
    price: 19.00,
  },
  {
    id: 2,
    name: "Tonometer",
    image: "/medical-device.svg",
    price: 20.00,
  },
  {
    id: 3,
    name: "ECG cardiograph",
    image: "/medical-device2.svg",
    price: 15.00,
  },
  {
    id: 4,
    name: "Blood glucose meter",
    image: "/medical-device3.svg",
    price: 25.00,
  },
  {
    id: 5,
    name: "Lab hand gloves",
    image: "/medical-protecti4.svg",
    price: 20.00,
  },
  {
    id: 6,
    name: "Stethoscope",
    image: "/health5.svg",
    price: 14.00,
  },
  {
    id: 7,
    name: "Inhaler pressure drop ",
    image: "/blue-asthma5.svg",
    price: 33.00,
  },
  {
    id: 8,
    name: "Multi vitamin",
    image: "/Groupggg.svg",
    price: 32.00,
  },
];
