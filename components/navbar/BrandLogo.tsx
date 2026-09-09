"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
}

export default function BrandLogo({ className = "", onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`flex items-center space-x-2.5 group cursor-pointer ${className}`}
    >
      <Logo
        size={36}
        animated
        className="group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      />
      <div className="flex flex-col">
        <span className="text-base font-bold font-sora tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">
          ATIN <span className="text-blue-500">SHARMA</span>
        </span>
        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono leading-none mt-0.5">
          Flutter Developer & Product Builder
        </span>
      </div>
    </Link>
  );
}
