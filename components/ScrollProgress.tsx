"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-slate-900/40">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 shadow-[0_0_10px_#3b82f6]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut" }}
      />
    </div>
  );
}
