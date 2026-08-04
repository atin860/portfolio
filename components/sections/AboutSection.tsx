"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Sparkles, CheckCircle, Zap, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  const competencies = [
    "3+ Years Flutter Experience",
    "Android & iOS App Publishing",
    "Firebase Architecture Design",
    "REST API & Dio Integration",
    "State Management (GetX, BLoC, Provider)",
    "Clean Architecture Patterns",
    "UI/UX Pixel-Perfect Implementation",
    "Google Play & App Store Submission",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Blue gradient blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Who I Am & What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-slate-400 text-base">
            A passionate Flutter Developer turning ideas into production-ready mobile apps.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left – Profile Image + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Small Profile Photo */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 p-[2px] shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111827]">
                  <Image
                    src="/profile2.jpeg"
                    alt="Atin Sharma"
                    fill
                    sizes="(max-width:640px) 160px, 192px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Quick Stat Pills */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {[
                { label: "Years Experience", value: "3+", color: "text-blue-400" },
                { label: "Production Apps", value: "6+", color: "text-sky-400" },
                { label: "Store Published", value: "✓", color: "text-emerald-400" },
                { label: "Client Satisfaction", value: "100%", color: "text-purple-400" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-4 rounded-2xl border-white/10 text-center">
                  <div className={`text-2xl font-extrabold font-sora ${s.color}`}>{s.value}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – Bio Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15 } } }}
            className="lg:col-span-8 glass-card p-8 rounded-3xl border-white/10 space-y-8"
          >
            {/* Bio Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-sora text-white flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-400" />
                Flutter Developer & Product Builder
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I&apos;m a <strong className="text-white">Flutter Developer</strong> with over 3 years of experience crafting beautiful, performant cross-platform applications for Android, iOS, and the Web. Currently working at <strong className="text-blue-400">Devoy Softech Pvt. Ltd.</strong>, I&apos;ve built and shipped production applications used by real users across pharmacy management, marketplace, restaurant ordering, and workforce domains.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                My passion lies at the intersection of clean architecture and pixel-perfect design — writing maintainable Dart code using GetX, BLoC, and Provider, integrating robust Firebase backends, and deploying polished experiences to the Google Play Store and Apple App Store.
              </p>
            </div>

            {/* Competencies Grid */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-blue-400 font-mono font-bold mb-4">
                Core Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {competencies.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0d1626] border border-white/5 hover:border-blue-500/30 text-xs font-medium text-slate-200 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Education Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-950/30 border border-blue-500/20">
                <Briefcase className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold font-sora text-white">Devoy Softech Pvt. Ltd.</div>
                  <div className="text-xs text-blue-400">Flutter Developer • 2024 – Present</div>
                  <a href="https://devoysoftech.com" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 mt-1">
                    <Globe className="w-3 h-3" /> devoysoftech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                <GraduationCap className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold font-sora text-white">B.Tech – CS & AI</div>
                  <div className="text-xs text-purple-400">Dr. AKTU Lucknow • 2022 – 2026</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
