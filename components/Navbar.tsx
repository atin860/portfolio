"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "./navbar/BrandLogo";
import NavigationMenu, { NavLink } from "./navbar/NavigationMenu";
import ResumeButton from "./navbar/ResumeButton";
import HireMeButton from "./navbar/HireMeButton";
import MobileMenu from "./navbar/MobileMenu";

export interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({
  onOpenResumeModal,
  onOpenContactModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "glass-nav py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Component */}
        <BrandLogo />

        {/* Desktop Navigation Menu Component */}
        <NavigationMenu links={NAV_LINKS} activeSection={pathname} />

        {/* Right Desktop Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          <ResumeButton onClick={onOpenResumeModal} />
          <HireMeButton onClick={onOpenContactModal} />
        </div>

        {/* Mobile Navigation Drawer Component */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          onClose={() => setMobileMenuOpen(false)}
          links={NAV_LINKS}
          activeSection={pathname}
          onOpenResumeModal={onOpenResumeModal}
          onOpenContactModal={onOpenContactModal}
        />
      </div>
    </header>
  );
}

export { BrandLogo, NavigationMenu, ResumeButton, HireMeButton, MobileMenu };
