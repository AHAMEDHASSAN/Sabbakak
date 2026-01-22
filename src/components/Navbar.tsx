"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 md:py-6`}
      >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl border border-white/10 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-2xl py-2 px-6 md:px-8 border-slate-200/50" 
            : "bg-black/20 backdrop-blur-md py-3 px-6 md:px-8"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${scrolled ? "bg-primary shadow-lg shadow-primary/20" : "bg-white/20 backdrop-blur-sm"} group-hover:rotate-[10deg] group-hover:scale-110`}>
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7,13.3c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.4,5.4 c-1.9,1.9-1.9,5,0,6.9c1.9,1.9,5,1.9,6.9,0l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L14.7,13.3z" />
                <path d="M18.3,15.7c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l1.4-1.4C18.7,16.7,18.7,16.1,18.3,15.7z" />
                <path d="M15.7,18.3l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0S16.1,18.7,15.7,18.3z" />
                <path d="M12,2c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z" />
                <circle cx="12" cy="12" r="2" fill="#F2994A" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-base sm:text-xl font-black tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>
                منصة السباك
              </span>
              <span className={`text-[6px] sm:text-[8px] font-bold tracking-[0.2em] uppercase ${scrolled ? "text-primary/70" : "text-secondary"}`}>
                PLUMBER HUB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-bold transition-all relative group py-1 ${
                  scrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`} />
              </a>
            ))}
            <a 
              href="https://wa.me/966552576582"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95 ${
                scrolled 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white text-primary shadow-xl shadow-black/10"
              }`}
            >
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
              scrolled ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white backdrop-blur-sm"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>
    </header>

    {/* Mobile Nav Overlay - Root Level for true Full Screen */}
    <div 
      className={`md:hidden fixed inset-0 z-[999] transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Premium Glass Background */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-2xl flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        {/* Close Button - Larger and more prominent */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-10 right-10 bg-white/10 border border-white/20 p-5 rounded-[1.5rem] flex items-center justify-center shadow-lg hover:bg-white/20 transition-all hover:scale-110 active:scale-95 group"
        >
          <X size={40} className="text-white group-hover:rotate-90 transition-transform" />
        </button>

        {/* Logo Section */}
        <div className="flex flex-col items-center gap-3 mb-12 animate-in fade-in zoom-in duration-700 relative z-10">
           <div className="w-20 h-20 bg-primary/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center border border-white/20 shadow-2xl">
              <svg 
                viewBox="0 0 24 24" 
                className="w-12 h-12 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7,13.3c-1.1,1.1-3,1.1-4.1,0c-1.1-1.1-1.1-3,0-4.1l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.4,5.4 c-1.9,1.9-1.9,5,0,6.9c1.9,1.9,5,1.9,6.9,0l5.4-5.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L14.7,13.3z" />
                <path d="M18.3,15.7c-0.4-0.4-1-0.4-1.4,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l1.4-1.4C18.7,16.7,18.7,16.1,18.3,15.7z" />
                <path d="M15.7,18.3l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0S16.1,18.7,15.7,18.3z" />
                <path d="M12,2c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z" />
                <circle cx="12" cy="12" r="2" fill="#F2994A" />
              </svg>
           </div>
           <div className="text-center">
              <h2 className="text-4xl font-black text-white mb-2">منصة السباك</h2>
              <p className="text-secondary font-black tracking-[0.3em] uppercase text-[12px] italic">Premium Services</p>
           </div>
        </div>
        
        {/* Nav Links - Large and centered */}
        <div className="flex flex-col items-center gap-8 mb-12 w-full animate-in slide-in-from-bottom duration-700 delay-200 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-black text-white/90 hover:text-secondary active:text-secondary transition-all hover:scale-110 active:scale-95 py-2 px-8 rounded-2xl hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="w-full max-w-[320px] px-4 animate-in slide-in-from-bottom duration-700 delay-300 relative z-10">
           <a 
            href="https://wa.me/966552576582"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-secondary hover:bg-secondary-dark text-white w-full py-5 rounded-[2rem] font-black text-2xl shadow-2xl shadow-secondary/20 transition-all hover:scale-105 active:scale-95"
            onClick={() => setIsOpen(false)}
           >
             <Phone size={28} />
             تواصل معنا الآن
           </a>
        </div>
      </div>
    </div>
  </>
);
};

export default Navbar;
