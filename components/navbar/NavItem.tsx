"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavItem({ name, href, isActive, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-1 text-[11px] font-medium transition-colors duration-300 rounded-full ${
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
      <span className="relative z-10">{name}</span>
    </Link>
  );
}
