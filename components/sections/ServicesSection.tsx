"use client";

import { motion } from "framer-motion";
import {
  Smartphone, Flame, Globe, Plug, Gauge, Layout,
  ArrowRight, Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenContactModal: (subject?: string) => void;
}

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description: "End-to-end Flutter application development for Android, iOS, and Web from a single clean codebase using Flutter 3.x and Dart.",
    tags: ["Flutter", "Dart", "Android", "iOS", "Web"],
    color: "text-blue-400 border-blue-500/30",
    bg: "bg-blue-950/30",
  },
  {
    icon: Flame,
    title: "Firebase Backend Integration",
    description: "Complete Firebase architecture: Authentication, Cloud Firestore, Realtime Database, Cloud Functions, Storage, and Crashlytics.",
    tags: ["Firebase Auth", "Firestore", "Cloud Functions", "Storage"],
    color: "text-amber-400 border-amber-500/30",
    bg: "bg-amber-950/20",
  },
  {
    icon: Globe,
    title: "REST API Integration",
    description: "Robust backend API connectivity using Dio HTTP client, JWT token management, error handling, and clean repository patterns.",
    tags: ["REST APIs", "Dio", "JWT", "Retrofit"],
    color: "text-emerald-400 border-emerald-500/30",
    bg: "bg-emerald-950/20",
  },
  {
    icon: Layout,
    title: "UI/UX Development",
    description: "Pixel-perfect Flutter UI implementation from Figma/Adobe XD designs with smooth 60fps animations and custom widgets.",
    tags: ["Figma to Flutter", "Custom Widgets", "Animations", "Responsive"],
    color: "text-pink-400 border-pink-500/30",
    bg: "bg-pink-950/20",
  },
  {
    icon: Gauge,
    title: "App Performance Optimization",
    description: "Frame rate optimization, memory leak fixes, bundle size reduction, image caching, and lazy loading for smooth UX.",
    tags: ["Performance", "Memory", "Caching", "60fps"],
    color: "text-sky-400 border-sky-500/30",
    bg: "bg-sky-950/20",
  },
  {
    icon: Plug,
    title: "App Store Publishing",
    description: "Google Play Console & App Store Connect release submission, signing, privacy policy, screenshots, and review compliance.",
    tags: ["Play Store", "App Store", "Signing", "ASO"],
    color: "text-purple-400 border-purple-500/30",
    bg: "bg-purple-950/20",
  },
];

export default function ServicesSection({ onOpenContactModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0d1626]/40">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Services I <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-slate-400">Specialized Flutter mobile engineering services for startups and enterprises.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card glass-card-hover p-7 rounded-3xl border-white/10 flex flex-col gap-5 group"
            >
              <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${svc.bg} border ${svc.color} p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <svc.icon className={`w-full h-full ${svc.color.split(" ")[0]}`} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold font-sora text-white group-hover:text-blue-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#0d1626] border border-white/5 text-[10px] font-mono text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenContactModal(svc.title)}
                className="mt-auto flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 group/btn transition-colors"
              >
                <span>Get This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
