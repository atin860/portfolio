"use client";

import React from "react";

interface LogoProps {
  size?: number | string;
  className?: string;
  showContainer?: boolean;
  animated?: boolean;
  strokeWidth?: number;
  alt?: string;
}

export default function Logo({
  size = 40,
  className = "",
  showContainer = true,
  animated = false,
  strokeWidth = 34,
}: LogoProps) {
  const widthVal = typeof size === "number" ? `${size}px` : size;
  const heightVal = typeof size === "number" ? `${size}px` : size;

  if (showContainer) {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-xl bg-black overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-white/15 group-hover:border-white/30 transition-all duration-300 ${className}`}
        style={{ width: widthVal, height: heightVal }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-full h-full p-1"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? "transition-all duration-500 group-hover:scale-105" : ""}
          >
            {/* A Left Leg */}
            <path d="M 195 90 L 105 390" />
            {/* A Crossbar */}
            <path d="M 150 240 L 240 240" />
            {/* Apex Right Leg into Integrated S Ribbon */}
            <path d="M 195 90 L 285 390 C 345 390 395 345 395 285 C 395 220 330 220 310 190 C 275 140 330 85 400 120" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`inline-block ${className}`}
      style={{ width: widthVal, height: heightVal }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 195 90 L 105 390" />
        <path d="M 150 240 L 240 240" />
        <path d="M 195 90 L 285 390 C 345 390 395 345 395 285 C 395 220 330 220 310 190 C 275 140 330 85 400 120" />
      </g>
    </svg>
  );
}
