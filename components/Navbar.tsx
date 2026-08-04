"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Sparkles, Menu, X, Code2 } from "lucide-react";

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export default function Navbar({
  onOpenResumeModal,
  onOpenContactModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold font-sora tracking-tight text-white group-hover:text-blue-400 transition-colors">
              ATIN <span className="text-blue-500">SHARMA</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
              Flutter Developer & Product Builder
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500/20 border border-blue-500/50 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Resume Button */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center space-x-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white glass-card rounded-xl hover:border-blue-500/40 transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenContactModal}
            className="relative group px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold font-sora shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Hire Me</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-blue-400" />
            ) : (
              <Menu className="w-5 h-5 text-slate-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-white/10 mt-3 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {activeSection === link.href.substring(1) && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                  )}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full py-3 glass-card rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center space-x-2 border-white/10"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
