import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Zap,
  Shield,
  Cpu,
  Globe,
  BarChart3,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const typewriterWords = [
  "Creative Digital Solution",
  "Brand Experiences",
  "Marketing Strategies",
  "Web Development",
  "Growth Campaigns",
];

function useTypewriter(words, speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, speed, pause]);

  return words[index].substring(0, subIndex);
}

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeOrb, setActiveOrb] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedText = useTypewriter(typewriterWords);

  useEffect(() => {
    setIsVisible(true);

    const orbInterval = setInterval(() => {
      setActiveOrb((prev) => (prev + 1) % 8);
    }, 2500);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(orbInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const techStack = [
    { icon: Code, label: "Web Marketing" },
    { icon: Database, label: "Interface Design" },
    { icon: Zap, label: "Development" },
    { icon: Shield, label: "SEO Optimized" },
    { icon: Cpu, label: "Creative Layout" },
    { icon: Globe, label: "Support & Maintenance" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Lock, label: "Social Media Marketing" },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background - themed */}
      <div className="absolute inset-0 ">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(61,68,195,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(44,52,158,0.10)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(61,68,195,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(44,52,158,0.07)_1px,transparent_1px)] bg-[size:100px_100px]"
          style={{
            transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#3D44C3]/20 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#2C349E]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-t from-[#3D44C3]/10 to-transparent blur-3xl transform -translate-x-1/2" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-16 left-16 w-20 h-20 opacity-40">
        <div className="absolute top-0 left-0 w-6 h-6">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3D44C3] to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#3D44C3] to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-6 h-6">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#3D44C3] to-transparent" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#3D44C3] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-6 h-6">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#3D44C3] to-transparent" />
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-[#3D44C3] to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#3D44C3] to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-[#3D44C3] to-transparent" />
        </div>
      </div>

      <div className="absolute top-16 right-16 w-20 h-20 opacity-40">
        <div className="absolute top-0 left-0 w-6 h-6">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C349E] to-transparent" />
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#2C349E] to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-6 h-6">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#2C349E] to-transparent" />
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#2C349E] to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-6 h-6">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C349E] to-transparent" />
          <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-[#2C349E] to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6">
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#2C349E] to-transparent" />
          <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-[#2C349E] to-transparent" />
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute top-1/4 left-12 w-2 h-2 bg-[#3D44C3] rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-[#2C349E] rounded-full animate-pulse delay-1000 opacity-60" />
      <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-[#3D44C3] rounded-full animate-pulse delay-2000 opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#2C349E] rounded-full animate-pulse delay-500 opacity-60" />

      {/* Service Labels */}
      <div className="hidden lg:block absolute top-40 left-12 text-[#3D44C3]/70 text-sm font-medium tracking-wide">
        ENTERPRISE SOLUTIONS
      </div>
      <div className="hidden lg:block absolute top-40 right-12 text-[#2C349E]/70 text-sm font-medium tracking-wide">
        SEO OPTIMISATION
      </div>
      <div className="hidden lg:block absolute bottom-40 left-12 text-[#3D44C3]/70 text-sm font-medium tracking-wide">
        SOCIAL MEDIA MARKETING
      </div>
      <div className="hidden lg:block absolute bottom-40 right-12 text-[#2C349E]/70 text-sm font-medium tracking-wide">
        ADVANCED ANALYTICS
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[75vh] px-4 sm:px-6 lg:px-12 text-center lg:text-left mt-20 ">
        {/* Left Section: Central Tech Illustration */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-8 mb-16 lg:mb-0 pl-[-20px]">
          <div className="relative">
            {/* Dashboard */}
            <div
              className={`relative w-64 h-36 sm:w-80 sm:h-48 md:w-96 md:h-56 lg:w-[400px] lg:h-60 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-[#3D44C3]/30 shadow-2xl backdrop-blur-sm transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-gradient-to-r from-[#3D44C3]/50 to-[#2C349E]/50 rounded-t-xl sm:rounded-t-2xl border-b border-[#3D44C3]/30 flex items-center px-3 sm:px-4">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500/80 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500/80 rounded-full" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500/80 rounded-full" />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs sm:text-sm text-gray-500 font-mono hidden sm:block">
                    kola Communications .
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 pt-12 sm:pt-14 h-full flex flex-col">
                {/* Dashboard Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="h-4 sm:h-6 md:h-8 bg-gradient-to-r from-[#3D44C3]/20 to-[#2C349E]/20 rounded border border-[#3D44C3]/30" />
                  <div className="h-4 sm:h-6 md:h-8 bg-gradient-to-r from-[#3D44C3]/20 to-[#2C349E]/20 rounded border border-[#3D44C3]/30" />
                  <div className="hidden sm:block h-4 sm:h-6 md:h-8 bg-gradient-to-r from-[#3D44C3]/20 to-[#2C349E]/20 rounded border border-[#3D44C3]/30" />
                </div>
                {/* Progress Bars */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 flex-1">
                  <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-[#3D44C3]/30 to-transparent rounded w-4/5" />
                  <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-[#3D44C3]/30 to-transparent rounded w-3/5" />
                  <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-[#3D44C3]/30 to-transparent rounded w-2/3" />
                  <div className="hidden sm:block h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-[#3D44C3]/30 to-transparent rounded w-1/2" />
                </div>
              </div>
            </div>

            {/* Tech Orbs */}
            {techStack.map((tech, index) => {
              const angle = index * 45 * (Math.PI / 180);
              const radius =
                window.innerWidth < 640
                  ? 80
                  : window.innerWidth < 768
                  ? 110
                  : 140;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={tech.label}
                  className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#3D44C3]/30 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-700 hover:scale-110 ${
                    activeOrb === index
                      ? "scale-110 border-[#3D44C3]/70 shadow-lg shadow-[#3D44C3]/30 bg-gradient-to-br from-[#3D44C3]/20 to-[#2C349E]/20"
                      : "hover:border-[#3D44C3]/50"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <tech.icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 mb-0.5 sm:mb-1 transition-colors duration-500 ${
                      activeOrb === index ? "text-[#3D44C3]/60" : "text-white/40"
                    }`}
                  />
                  <div
                    className={`text-xs font-medium transition-colors duration-500 hidden md:block ${
                      activeOrb === index
                        ? "text-[#3D44C3]"
                        : "text-white/40"
                    }`}
                  >
                    {tech.label.split(" ")[0]}
                  </div>
                </div>
              );
            })}

            {/* Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                width: "400px",
                height: "400px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {techStack.map((_, index) => {
                const angle = index * 45 * (Math.PI / 180);
                const radius = 140;
                const x1 = 200 + Math.cos(angle) * 80;
                const y1 = 200 + Math.sin(angle) * 80;
                const x2 = 200 + Math.cos(angle) * radius;
                const y2 = 200 + Math.sin(angle) * radius;

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={
                      activeOrb === index
                        ? "rgba(61,68,195,0.3)"
                        : "rgba(61,68,195,0.15)"
                    }
                    strokeWidth="1"
                    className="transition-all duration-700"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-20">
          {/* Heading with typewriter effect */}
          <h1
            className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 leading-tight max-w-6xl px-4 lg:px-0 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-[#3D44C3] to-[#2C349E] bg-clip-text text-transparent">
              <motion.span
                key={typedText.length > 0 ? typedText : "typewriter-placeholder"}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
                style={{
                  color: typedText.length > 0 ? "inherit" : "transparent",
                  WebkitTextFillColor: typedText.length > 0 ? "inherit" : "transparent",
                }}
              >
                {/* Always show at least one character for color */}
                {typedText.length > 0 ? typedText : "\u00A0"}
                <span className="animate-pulse text-[#3D44C3]">|</span>
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-xl text-white/40 mb-8 sm:mb-12 max-w-4xl leading-relaxed font-light px-4 lg:px-0 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transforming brands with innovative design, marketing expertise,
            and technology to help you stand out and grow your business.
          </p>

          {/* CTA Button */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-2xl lg:max-w-none transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#4C52D0] hover:to-[#343BAA] text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar & Fade */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-[#3D44C3]/30 to-transparent" />
        <div className="h-32 bg-gradient-to-t from-black via-[#2C349E]/50 to-transparent" />
      </div>
    </div>
  );
}
