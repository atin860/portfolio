"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaGooglePlay, FaApple } from "react-icons/fa";

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

const ROLES = [
  "Flutter Developer",
  "Product Builder",
  "Android & iOS Engineer",
  "Cross-Platform Architect",
  "Firebase Specialist",
];

export default function HeroSection({
  onOpenResumeModal,
  onOpenContactModal,
}: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-800/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6"
        >
          {/* Greeting Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Available for Work</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp} className="space-y-1">
            <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">
              Hi there 👋 I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold font-sora tracking-tight text-white leading-none">
              Atin{" "}
              <span className="text-gradient">Sharma</span>
            </h1>
          </motion.div>

          {/* Animated Typing Role */}
          <motion.div variants={fadeUp} className="h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-xl sm:text-2xl font-semibold font-sora text-slate-200 flex items-center gap-2"
              >
                <span className="text-blue-500">⚡</span>
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="text-slate-300 text-base leading-relaxed max-w-lg">
            Building scalable, high-performance cross-platform Flutter applications for Android, iOS, and Web. From pixel-perfect UI to Firebase backends — delivering production-ready apps that live on the Play Store & App Store.
          </motion.p>

          {/* Info Pills */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg border-white/10">
              <MapPin className="w-3.5 h-3.5 text-blue-400" /> Lucknow, UP, India
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg border-white/10">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 79055 39159
            </span>
            <a
              href="mailto:atin86015@gmail.com"
              className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg border-white/10 hover:border-blue-500/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" /> atin86015@gmail.com
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenContactModal}
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-sora text-sm font-bold shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResumeModal}
              className="group px-7 py-3.5 rounded-xl glass-card text-white font-sora text-sm font-semibold hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2 border-white/10"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>
          </motion.div>

          {/* Social Links & Store Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Connect</span>
              <a
                href="https://github.com/atin860"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 glass-card rounded-xl text-slate-400 hover:text-white hover:border-blue-500/40 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/atin-sharma-579a10295/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 glass-card rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="h-5 w-px bg-white/10 hidden sm:block" />

            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                <FaGooglePlay className="w-3 h-3" /> Play Store Published
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 text-sky-400 border border-sky-500/30 text-xs font-semibold">
                <FaApple className="w-3 h-3" /> App Store Published
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="flex justify-center items-center relative"
        >
          {/* Outer Glow Rings */}
          <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-blue-500/20 animate-spin pointer-events-none" style={{ animationDuration: "30s" }} />
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-sky-500/15 animate-spin pointer-events-none" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

          {/* Floating Badge – Experience */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 z-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <span className="text-xl">🚀</span>
            <div>
              <div className="text-xs font-bold font-sora text-white">3+ Years</div>
              <div className="text-[10px] text-slate-400">Flutter Experience</div>
            </div>
          </motion.div>

          {/* Floating Badge – Apps Published */}
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 z-20 glass-card px-4 py-2 rounded-xl flex items-center gap-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <span className="text-xl">📱</span>
            <div>
              <div className="text-xs font-bold font-sora text-white">6+ Apps</div>
              <div className="text-[10px] text-slate-400">On Play & App Store</div>
            </div>
          </motion.div>

          {/* Profile Photo Container */}
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
            {/* Gradient Ring Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 p-[3px] shadow-[0_0_50px_rgba(59,130,246,0.5)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111827]">
                <Image
                  src="/profile.jpeg"
                  alt="Atin Sharma – Flutter Developer"
                  fill
                  priority
                  sizes="(max-width:640px) 260px, 320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
