import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Services", href: "#process" },
    { label: "Blog", href: "#services" },
    { label: "About Us", href: "#plans" },
    { label: "Contact", href: "#contact" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98vw] max-w-7xl mx-auto 
      bg-transparent backdrop-blur-[8px] border border-white/15 rounded-2xl 
      shadow-md px-2 sm:px-6"
    >
      <div className="flex items-center justify-between h-14 lg:h-14">
        {/* Logo */}
        <div className="flex items-center gap-3 pl-4 md:pl-0">
          <div className="w-20 h-8 flex items-center justify-center bg-white rounded-lg shadow">
            <img
              src={logo}
              alt="Kola Communications Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="relative text-white/90 text-sm font-medium transition-colors duration-200
                 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-0 after:h-[2px] after:bg-[#6953F5] after:transition-all after:duration-300
                 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
<button
  className="w-full bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] hover:to-[#232B7D] text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
>
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white transition p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden absolute left-0 w-full px-4 overflow-hidden transition-all duration-400
        ${
          isMenuOpen
            ? "top-[100%] opacity-100 bg-black/90 max-h-96 backdrop-blur-lg border-t border-white/10 py-4 shadow-2xl rounded-b-2xl"
            : "top-0 opacity-0 max-h-0 py-0"
        }
      `}
      >
        <div className="space-y-2">
          {navLinks.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="block text-white/90 hover:text-white duration-200 text-base font-medium py-3 pl-4 border border-white/20 rounded-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-4">
<button
  className="w-full bg-gradient-to-r from-[#3D44C3] to-[#2C349E] hover:from-[#595ED2] hover:to-[#232B7D] text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
>
 <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
