"use client";

import {
  Code,
  TrendingUp,
  Palette,
  Globe,
  Target,
  Eye,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () =>
        container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);


  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "10+", label: "Countries Served" },
    { number: "3+", label: "Years Experience" },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description:
        "We deliver high-quality solutions within tight deadlines without compromising on excellence.",
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description:
        "Transparent communication and consistent delivery make us your most trusted digital partner.",
    },
    {
      icon: Star,
      title: "Creative Excellence",
      description:
        "Award-winning designs that not only look stunning but drive real business results.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description:
        "International experience across diverse markets brings unique insights to every project.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Dynamic background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-[#7379e5]/8 to-[#212785]/8 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#212785]/5 to-[#7379e5]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#7379e5]/3 to-[#212785]/3 rounded-full blur-3xl" />
      </div>


      {/* Who We Are Section */}
      <section className="py-32 px-6" id="about" data-animate>
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible["about"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Who We Are</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#7379e5] to-[#212785] mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <p className="text-xl font-light text-gray-300 leading-relaxed">
                  Kola Communications is a forward-thinking digital solutions company that bridges the gap between
                  creativity and technology. We specialize in crafting exceptional digital experiences that not only
                  look stunning but drive real business results.
                </p>
                <p className="text-lg font-light text-gray-400 leading-relaxed">
                  With a global perspective and local expertise, we serve clients across India, US, Europe, and the
                  Middle East, delivering tailored solutions that resonate with diverse audiences and markets.
                </p>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#7379e5]/30 transition-all duration-500">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7379e5]/20 to-[#212785]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                        <Target className="w-8 h-8 text-[#7379e5]" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Mission</h3>
                      <p className="text-sm text-gray-400 font-light">
                        Empowering businesses through meaningful digital experiences
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7379e5]/20 to-[#212785]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                        <Eye className="w-8 h-8 text-[#7379e5]" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Vision</h3>
                      <p className="text-sm text-gray-400 font-light">
                        Your trusted partner in digital transformation worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section
  className="py-20 mt-[-80px] px-6 border-y border-white/5"
  id="stats"
  data-animate
>
  <div className="max-w-6xl mx-auto">
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
        isVisible["stats"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      {stats.map((stat, index) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
          if (isVisible["stats"]) {
            let start = 0;
            const target = parseInt(stat.number);
            const increment = target / 50;
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                start = target;
                clearInterval(timer);
              }
              setCount(Math.floor(start));
            }, 30); 
          }
        }, [isVisible["stats"]]);

        return (
          <div
            key={index}
            className="text-center group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#7379e5] to-[#212785] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {count}
              {stat.number.replace(/[0-9]/g, "") /* preserves + sign */}
            </div>
            <div className="text-gray-400 font-light tracking-wide">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-32 px-6 bg-white/[0.02]" id="why-choose" data-animate>
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Why Choose Us</h2>
              <p className="text-xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We don't just deliver projects; we build partnerships that drive long-term success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-700 ease-out ${
                    isVisible["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-[#7379e5]/30 hover:shadow-2xl hover:shadow-[#7379e5]/10 transition-all duration-500 h-full group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#7379e5]/20 to-[#212785]/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-[#7379e5]" />
                    </div>
                    <h3 className="text-xl font-medium mb-4 group-hover:text-[#7379e5] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        
     

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-white/[0.02] mt-[-50px]" id="cta" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Ready to Transform
              <span className="block pb-2 bg-gradient-to-r from-[#7379e5] to-[#212785] bg-clip-text text-transparent">
                Your Digital Presence?
              </span>
            </h2>
            <p className="text-xl font-light text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary that elevates your brand and drives meaningful
              results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-[#7379e5] to-[#212785] text-white px-10 py-5 rounded-full font-medium hover:shadow-2xl hover:shadow-[#7379e5]/25 transition-all duration-500 hover:scale-105 text-lg">
                <span className="flex items-center gap-3">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7379e5]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7379e5]" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7379e5]" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
