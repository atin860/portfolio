"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Code2, Cpu } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing Flutter 3.x Engine...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const textSequence = [
      { threshold: 10, text: "Initializing Flutter 3.x Engine..." },
      { threshold: 35, text: "Compiling Dart Bytecode & Widgets..." },
      { threshold: 60, text: "Loading Surity Fox, Pharmnex & Jarro..." },
      { threshold: 85, text: "Connecting Firebase & REST APIs..." },
      { threshold: 95, text: "Welcome to Atin Sharma's Portfolio" },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }

        const nextProgress = prev + Math.floor(Math.random() * 8) + 4;
        const currentSeq = textSequence.find(
          (seq) => nextProgress >= seq.threshold
        );
        if (currentSeq) setCurrentText(currentSeq.text);

        return Math.min(nextProgress, 100);
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0B1120] flex flex-col items-center justify-center px-4 overflow-hidden"
        >
          {/* Ambient Blue Background Glows */}
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] animate-pulse-glow" />

          {/* Main Loader Box */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-8 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.35)] relative"
            >
              <Smartphone className="w-10 h-10 text-blue-400 animate-pulse" />
              <Code2 className="w-5 h-5 text-sky-300 absolute bottom-3 right-3" />
            </motion.div>

            {/* Developer Tag */}
            <div className="flex items-center space-x-2 mb-3">
              <Cpu className="w-4 h-4 text-blue-400 animate-spin" />
              <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono font-semibold">
                Atin Sharma • Portfolio
              </span>
            </div>

            {/* Percentage Counter */}
            <h2 className="text-6xl font-bold font-sora text-white mb-4 tracking-tight flex items-baseline">
              <span>{progress}</span>
              <span className="text-2xl text-blue-400 ml-1">%</span>
            </h2>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-[1px] mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 rounded-full shadow-[0_0_12px_#3b82f6]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status Message */}
            <p className="text-xs font-mono text-slate-400 min-h-[24px]">
              {currentText}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
