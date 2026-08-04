"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";

interface FloatingCTAProps {
  onOpenContactModal: () => void;
}

export default function FloatingCTA({ onOpenContactModal }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={onOpenContactModal}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-sora text-xs font-bold shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Hire Me</span>
            <MessageSquare className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
