"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface HireMeButtonProps {
  onClick: () => void;
  className?: string;
}

export default function HireMeButton({ onClick, className = "" }: HireMeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative group px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[11px] font-bold font-sora shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-1.5 ${className}`}
    >
      <Sparkles className="w-3 h-3 animate-pulse" />
      <span>Hire Me</span>
    </button>
  );
}
