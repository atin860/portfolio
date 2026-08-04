"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Eye, Globe, Sparkles } from "lucide-react";
import { FaGithub, FaGooglePlay, FaApple } from "react-icons/fa";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  techStack: string[];
  category: "mobile" | "web" | "fullstack";
  description: string;
  features: string[];
  image: string;
  screenshots: string[];
  liveDemo: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  github: string;
  badgeText: string;
  accentColor: string;
}

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const projects: Project[] = [
  {
    id: "surity-fox",
    title: "Surity Fox",
    subtitle: "AI Asset Security & Insurance Platform",
    period: "2024 – Present",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Biometrics", "AES Encryption"],
    category: "mobile",
    description: "AI-powered asset protection, identity security, and insurance verification platform. Features encrypted document vault, biometric authentication, real-time risk assessment, and automated claim submission.",
    features: ["Encrypted Digital Asset Vault", "Biometric Identity Verification", "AI Risk Assessment", "Real-Time Claims Tracking", "AES Encryption + Firebase"],
    image: "/project-surity-fox.png",
    screenshots: ["/project-surity-fox.png"],
    liveDemo: "https://dealer.suretyfox.in/dashboard",
    github: "https://github.com/atin860",
    badgeText: "Security App",
    accentColor: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "pharmnex",
    title: "Pharmnex",
    subtitle: "Pharmacy Management App",
    period: "2025 – Present",
    techStack: ["Flutter", "Dart", "Firebase", "Firestore", "REST APIs", "Dio"],
    category: "mobile",
    description: "Comprehensive pharmacy management app with real-time medicine inventory tracking, customer order processing, supplier billing, and role-based secure authentication.",
    features: ["Medicine Inventory & Stock Alerts", "Prescription & Order Management", "Firebase Real-Time Sync", "Secure JWT Authentication", "REST API + Dio"],
    image: "/project-pharmnex.png",
    screenshots: ["/project-pharmnex.png"],
    liveDemo: "https://dev.pharmnex.app",
    playStoreUrl: "https://play.google.com/store/search?q=Pharmnex&c=apps",
    appStoreUrl: "https://apps.apple.com/us/search?term=Pharmnex",
    github: "https://github.com/atin860",
    badgeText: "Production Live",
    accentColor: "from-blue-500/20 to-sky-600/20",
  },
  {
    id: "verkaufalles",
    title: "VerkaufAlles",
    subtitle: "Multi-Category Marketplace · Austria",
    period: "2024 – Present",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps", "WebSockets", "REST APIs"],
    category: "fullstack",
    description: "C2C and B2C marketplace platform for buying and selling products, vehicles, and real estate in Austria. Features radius map search, real-time chat, and verified profiles.",
    features: ["Product, Vehicle & Real Estate Listings", "Radius Map Search", "Real-Time WebSocket Chat", "Push Notifications", "Verified Seller Profiles"],
    image: "/project-verkaufalles.png",
    screenshots: ["/project-verkaufalles.png"],
    liveDemo: "https://www.verkaufalles.at/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.verkaufalles&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/in/app/verkaufealles/id6761651090",
    github: "https://github.com/atin860",
    badgeText: "Mobile & Web",
    accentColor: "from-purple-500/20 to-indigo-600/20",
  },
  {
    id: "jarro",
    title: "Jarro",
    subtitle: "Smart Restaurant QR Ordering",
    period: "2024 – Present",
    techStack: ["Flutter", "Dart", "Firebase", "Firestore", "AES", "JWT", "GetX"],
    category: "mobile",
    description: "End-to-end QR-based restaurant ordering and table management system with real-time kitchen dispatch, digital menu management, and multi-tier admin controls.",
    features: ["QR Code Table Ordering", "Digital Menu Management", "Real-Time Kitchen Tracking", "AES Encrypted Payloads", "Role-Based Admin Panel"],
    image: "/project-jarro.png",
    screenshots: ["/project-jarro.png"],
    liveDemo: "https://admin.jarro.in",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vfoods.vsafe&pcampaignid=web_share",
    github: "https://github.com/atin860",
    badgeText: "Admin + User App",
    accentColor: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "medico-life-partner",
    title: "Medico Life Partner",
    subtitle: "Doctors Matrimony Platform",
    period: "2024",
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "BLoC"],
    category: "mobile",
    description: "Specialized matchmaking app exclusively for medical professionals with verified degree credentials, private photo controls, and preference-based matching algorithms.",
    features: ["Verified Medical Profiles", "Secure Matchmaking Algorithms", "Private Contact Requests", "REST API Auth Pipeline", "Clean BLoC Architecture"],
    image: "/project-medico.png",
    screenshots: ["/project-medico.png"],
    liveDemo: "https://medicolifepartner.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.medicolifepartner.medico&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/in/app/medico-life-partner-matrimony/id6474893071",
    github: "https://github.com/atin860",
    badgeText: "iOS & Android",
    accentColor: "from-rose-500/20 to-pink-600/20",
  },
  {
    id: "arthum",
    title: "Arthum Partner",
    subtitle: "Workforce Management Platform",
    period: "Sep 2023",
    techStack: ["Flutter Web", "Dart", "REST APIs", "Provider"],
    category: "web",
    description: "Scalable workforce management platform built with Flutter Web delivering responsive admin workflows, shift scheduling, and REST API-powered reporting.",
    features: ["Shift & Attendance Tracking", "Role-Based Permissions", "Responsive Flutter Web", "REST API Data Integration", "Automated Reports"],
    image: "/project-arthum.png",
    screenshots: ["/project-arthum.png"],
    liveDemo: "https://arthum.co.in/",
    github: "https://github.com/atin860",
    badgeText: "Flutter Web",
    accentColor: "from-sky-500/20 to-cyan-600/20",
  },
];

const filters = [
  { id: "all", name: "All" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "web", name: "Flutter Web" },
  { id: "fullstack", name: "Full-Stack" },
];

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Featured Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Production <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-slate-400">Real apps built, shipped, and used by real users.</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-sora transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105"
                  : "glass-card text-slate-400 hover:text-white border-white/10"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glass-card-hover rounded-3xl border-white/10 overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#111827]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accentColor} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

                {/* View Overlay */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="absolute inset-0 flex items-center justify-center bg-[#0B1120]/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold font-sora shadow-lg">
                    <Eye className="w-4 h-4" /> View Details
                  </span>
                </button>

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full glass-card text-[10px] font-mono text-blue-300 border-blue-500/30 uppercase">
                    {project.badgeText}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-xs font-mono text-slate-400">
                  {project.period}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <h3 className="text-xl font-bold font-sora text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium mt-0.5">{project.subtitle}</p>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-1 flex-1">
                  {project.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#0d1626] border border-white/5 text-[10px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex gap-2">
                    {project.playStoreUrl && (
                      <a href={project.playStoreUrl} target="_blank" rel="noreferrer"
                        className="p-2 rounded-xl bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/60 border border-emerald-500/30 text-xs"
                        title="Google Play Store">
                        <FaGooglePlay className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a href={project.appStoreUrl} target="_blank" rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-900 text-sky-400 hover:bg-slate-800 border border-sky-500/30"
                        title="Apple App Store">
                        <FaApple className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="p-2 rounded-xl glass-card text-slate-400 hover:text-white border-white/10"
                      title="GitHub">
                      <FaGithub className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <a href={project.liveDemo} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/15 text-blue-300 hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold font-sora border border-blue-500/30">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
