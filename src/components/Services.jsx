import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Megaphone, Search, FileText, Share2 } from 'lucide-react';

const services = [
  {
    name: "Website Development",
    descp:
      "Designing and building modern, responsive websites that showcase your brand and engage your audience.",
    icon: <Code size={45} />,
  },
  {
    name: "App Development",
    descp:
      "Creating high-performance mobile applications tailored for iOS and Android platforms to connect with users everywhere.",
    icon: <Smartphone size={45} />,
  },
  {
    name: "Digital Marketing",
    descp:
      "Driving business growth through targeted digital campaigns, paid ads, and online strategies that deliver results.",
    icon: <Megaphone size={45} />,
  },
  {
    name: "Search Engine Optimization",
    descp:
      "Improving your website’s visibility and ranking in search engines to attract more organic traffic and potential clients.",
    icon: <Search size={45} />,
  },
  {
    name: "Content Creation",
    descp:
      "Crafting compelling and relevant content to effectively engage your audience and establish your authority.",
    icon: <FileText size={45} />,
  },
  {
    name: "Social Media Marketing",
    descp:
      "Building your brand’s presence and engaging your followers across all major social platforms with creative strategies.",
    icon: <Share2 size={45} />,
  },
];

export default function Services() {
  return (
    <div className="py-24 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 mb-8 border border-gray-700 rounded-lg">
            <span className="text-sm text-gray-500 tracking-wider">
              Services
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl  mb-6 text-white leading-tight">
            Your Vision,{" "}
            <span className="bg-gradient-to-r from-[#7379e5] to-[#212785] bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto ">
            Delivering tailored solutions to streamline operations, spark
            innovation, and drive success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{ scale: 1.03 }}
              className="group border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-18 h-18 bg-blue-500/10 border border-blue-500/20 rounded-lg group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl text-gray-300 mb-4 group-hover:text-blue-100 transition-colors duration-300">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.descp}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-px bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

