"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./sections/ProjectsSection";
import {
  X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, Globe,
} from "lucide-react";
import { FaGithub, FaGooglePlay, FaApple } from "react-icons/fa";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const screenshots = project.screenshots?.length ? project.screenshots : [project.image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1120]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border-white/12 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0d1626]/60">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase">{project.category} • {project.period}</span>
              <h3 className="text-lg font-bold font-sora text-white">{project.title} — {project.subtitle}</h3>
            </div>
            <button onClick={onClose} className="p-2 glass-card rounded-xl text-slate-400 hover:text-white border-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Screenshot */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#111827] border border-white/10">
              <img src={screenshots[activeImageIndex]} alt={project.title} className="w-full h-full object-cover" />
              {screenshots.length > 1 && (
                <>
                  <button onClick={() => setActiveImageIndex((p) => (p - 1 + screenshots.length) % screenshots.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 glass-card rounded-full text-white border-white/10">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveImageIndex((p) => (p + 1) % screenshots.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 glass-card rounded-full text-white border-white/10">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0d1626] border border-white/5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-blue-950/50 border border-blue-500/25 text-xs font-mono text-blue-300">{t}</span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#0d1626]/60">
            <div className="flex gap-2">
              {project.playStoreUrl && (
                <a href={project.playStoreUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold font-sora hover:bg-emerald-500 transition-colors">
                  <FaGooglePlay className="w-3.5 h-3.5" /> Play Store
                </a>
              )}
              {project.appStoreUrl && (
                <a href={project.appStoreUrl} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-sky-400 text-xs font-bold font-sora hover:bg-slate-700 border border-sky-500/30 transition-colors">
                  <FaApple className="w-3.5 h-3.5" /> App Store
                </a>
              )}
            </div>
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-slate-300 hover:text-white text-xs font-semibold">
                <FaGithub className="w-4 h-4 text-blue-400" /> GitHub
              </a>
              <a href={project.liveDemo} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold font-sora shadow-lg">
                <Globe className="w-4 h-4" /> Live Demo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
