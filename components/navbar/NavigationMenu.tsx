"use client";

import React from "react";
import NavItem from "./NavItem";

export interface NavLink {
  name: string;
  href: string;
}

interface NavigationMenuProps {
  links: NavLink[];
  activeSection: string;
  className?: string;
}

export default function NavigationMenu({
  links,
  activeSection,
  className = "",
}: NavigationMenuProps) {
  return (
    <nav
      className={`hidden lg:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full border-white/10 ${className}`}
    >
      {links.map((link) => {
        const isActive =
          activeSection === link.href ||
          activeSection === link.href.replace(/^\//, "") ||
          (link.href === "/" && (activeSection === "home" || activeSection === "/" || activeSection === ""));
        return (
          <NavItem
            key={link.name}
            name={link.name}
            href={link.href}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
}
