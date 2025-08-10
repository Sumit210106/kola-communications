import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  Mail,
  Phone,
  Bell,
  Newspaper,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Send,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 const footerLinks = {
  Services: [
    "Website Development",
    "Digital Marketing",
    "Search Engine Optimization",
    "Content Creation",
    "Social Media Marketing",
    "App Development"
  ],
  Company: [
    "About Us", 
    "Our Team", 
    "Careers", 
    "Press & Media", 
    "Contact Us"
  ],
};


  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section - Company Info */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-800 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Company Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center bg-white">
                  <img
                    src={logo}
                    alt="kola communications"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white">Kola Communications</h2>
              </div>
            </div>
            <p className="text-gray-400  leading-relaxed max-w-md">
              Experience the future of business with intelligent, scalable
              automation solutions tailored to your needs.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="text-sm">business@kolacommunications.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-8108969630</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-white mb-3 flex items-center">
                {/* Bell icon example */}
                Stay Updated with our Newsletter
                <Bell className="inline-block ml-2" size={24} />
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get the latest insights delivered to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6953F5] focus:border-transparent transition-all text-sm placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r 0FC] bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Links + Social - each takes 50% width on desktop, stacked on mobile */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links Panel */}
          <div className="flex flex-col items-center border border-gray-800 rounded-xl p-6 space-y-8">
            {/* Centered heading */}
            <h4 className="text-white font-semibold text-base sm:text-lg uppercase tracking-wider text-center">
              Follow Us
            </h4>

            {/* Bigger, redesigned social links */}
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
              
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-[60px] w-[60px] rounded-lg border border-gray-700 flex items-center justify-center 
                 hover:bg-gradient-to-r hover:from-[#6953F5] hover:to-[#17142E] 
                 hover:border-transparent transform hover:scale-110 
                 transition-all duration-300 shadow-md"
                >
                  
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-sm mb-6 md:mb-0">
            © {new Date().getFullYear()} Kola Communications. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-2">
            <h2 className="text-sm sm:text-base text-gray-400">
              Developed by{" "}
              <a
                href="https://kolacommunications.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-purple-400 transition-colors duration-300"
              >
                Kola Communications
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#6953F5] to-[#17142E] hover:from-[#7C60FC] hover:to-[#2D2850] rounded-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
