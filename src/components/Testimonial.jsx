// import { div } from "framer-motion/client";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Kola Communications has been a game-changer for our business. Their team’s innovative approach to content and design helped us connect with",
      name: "Dhairya Shah",
      designation: "Digital Marketing Manager",
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "Kola Communications’ ability to understand our needs and translate them into creative campaigns has been invaluable. Their work has not only strengthened our",
      name: "Karan Mehta",
      designation: "Content Marketing Specialist",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "Their team doesn’t just work on projects—they invest in your success. Kola Communications provided us with innovative designs and a clear strategy that",
      name: "Nitin",
      designation: "Brand Manager",
      src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "From concept to execution, Kola Communications made the entire process seamless and enjoyable. Their expertise in branding and digital marketing took our business",
      name: "Amit Verma",
      designation: "Social Media Manager",
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    },
  ];
 return (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-gray-300 text-4xl sm:text-5xl md:text-6xl mb-4">
        Testimonial
      </h2>
      <p className="text-gray-400 text-lg sm:text-xl mb-12">
        Hear from our amazing clients about their experiences
      </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  </section>
);

}
