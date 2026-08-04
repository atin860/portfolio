"use client";

import {
  Smartphone,
  Flame,
  Code2,
  Cpu,
  Layers,
  GitBranch,
  Server,
  Database,
  Monitor,
  Terminal,
  Globe,
} from "lucide-react";
import { FaGithub, FaAndroid, FaApple } from "react-icons/fa";

export default function TechMarquee() {
  const techStack = [
    { name: "Flutter", icon: Smartphone, color: "text-cyan-400" },
    { name: "Dart", icon: Code2, color: "text-indigo-400" },
    { name: "Firebase", icon: Flame, color: "text-amber-400" },
    { name: "REST APIs", icon: Globe, color: "text-blue-400" },
    { name: "Android", icon: FaAndroid, color: "text-emerald-400" },
    { name: "iOS", icon: FaApple, color: "text-sky-400" },
    { name: "Flutter Web", icon: Globe, color: "text-indigo-400" },
    { name: "GetX", icon: Layers, color: "text-purple-400" },
    { name: "Provider", icon: Layers, color: "text-indigo-400" },
    { name: "BLoC", icon: Layers, color: "text-blue-400" },
    { name: "Firestore", icon: Database, color: "text-amber-400" },
    { name: "SQLite", icon: Database, color: "text-teal-400" },
    { name: "Git & GitHub", icon: FaGithub, color: "text-slate-200" },
    { name: "VS Code", icon: Monitor, color: "text-sky-400" },
    { name: "Xcode", icon: Terminal, color: "text-blue-500" },
  ];

  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-10 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090D16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090D16] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center space-x-6">
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex items-center space-x-3 px-5 py-2.5 rounded-xl glass-card border-white/10 hover:border-cyan-500/30 hover:scale-105 transition-all duration-300 group cursor-default"
          >
            <tech.icon
              className={`w-5 h-5 ${tech.color} group-hover:rotate-12 transition-transform duration-300`}
            />
            <span className="text-sm font-semibold font-sora text-slate-200 group-hover:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
