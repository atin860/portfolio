"use client";

import React from "react";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  onClick: () => void;
  className?: string;
}

export default function ResumeButton({ onClick, className = "" }: ResumeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1.5 px-3 py-1.5 text-[11px] font-medium text-slate-300 hover:text-white glass-card rounded-xl hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      <Download className="w-3 h-3 text-blue-400" />
      <span>Resume</span>
    </button>
  );
}
