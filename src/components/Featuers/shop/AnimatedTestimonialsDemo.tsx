"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I ordered medical equipment and received everything quickly and in perfect condition. The quality is excellent and the service was very professional!",
      name: "Michael Rodriguez",
      designation: "Clinic Owner, Cairo",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "This store made it so easy to find all the healthcare products I needed. Fast delivery and genuine items — highly recommended!",

      name: "Sarah Chen",

      designation: "Pharmacist, Alexandria",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Great prices, reliable delivery, and excellent customer support. I’ve already recommended this website to my colleagues.",
      name: "Emily Watson",
      designation: "Hospital Procurement Manager",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "I was impressed by how easy it was to order medical supplies online. The platform is user-friendly and trustworthy.",
      name: "James Kim",
      designation: "Healthcare Consultant",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Excellent service and high-quality products! The oxygen concentrator I bought works perfectly. Will definitely shop again.",
      name: "Lisa Thompson",
      designation: "Home Care Provider",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
