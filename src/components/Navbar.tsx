"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "كيف يعمل", href: "#how-it-works" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-1" 
          : "bg-white shadow-md py-1 md:bg-transparent md:py-2 md:py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7,13.3c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.4,5.4 c-1.9,1.9-1.9,5,0,6.9c1.9,1.9,5,1.9,6.9,0l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L14.7,13.3z" />
                <path d="M18.3,15.7c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l1.4-1.4C18.7,16.7,18.7,16.1,18.3,15.7z" />
                <path d="M15.7,18.3l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0S16.1,18.7,15.7,18.3z" />
                <path d="M12,2c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z" />
                <circle cx="12" cy="12" r="2" fill="#F2994A" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-2xl font-black tracking-tight leading-none ${scrolled ? "text-slate-900" : "text-slate-900 md:text-white md:drop-shadow-md"}`}>
                منصة السباك
              </span>
              <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase opacity-80 ${scrolled ? "text-primary" : "text-primary md:text-secondary"}`}>
                PLUMBER HUB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-bold transition-all hover:text-secondary hover:scale-105 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-black text-lg transition-transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <Phone size={22} className="shrink-0" />
              اطلب الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-1.5 rounded-xl transition-colors ${
              scrolled ? "text-slate-900 hover:bg-slate-100" : "text-slate-900 hover:bg-slate-100 md:text-white md:hover:bg-white/20"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-xl py-6 px-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700 hover:text-primary py-2 border-b border-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-white text-center py-3 rounded-xl font-bold mt-2"
                onClick={() => setIsOpen(false)}
              >
                اطلب سباك الآن
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
