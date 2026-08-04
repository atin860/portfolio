"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const el = document.createElement("a");
      const file = new Blob([`ATIN SHARMA — Flutter Developer & Product Builder
Lucknow, Uttar Pradesh 226201
Phone: +91 79055 39159 | Email: atin86015@gmail.com
GitHub: github.com/atin860 | LinkedIn: linkedin.com/in/atin-sharma-579a10295

SUMMARY
Flutter Developer with 3+ years experience building scalable cross-platform apps for Android, iOS & Web.
Published production apps on Google Play Store and Apple App Store.

EXPERIENCE
Flutter Developer — Devoy Softech Pvt. Ltd. (2024–Present)
Jaipur, Rajasthan | devoysoftech.com

PROJECTS
1. Surity Fox — AI Asset Security & Insurance (dealer.suretyfox.in/dashboard)
2. Pharmnex — Pharmacy Management App (dev.pharmnex.app)
3. VerkaufAlles — Multi-Category Marketplace (verkaufalles.at)
4. Jarro — QR Restaurant Ordering (admin.jarro.in)
5. Medico Life Partner — Doctors Matrimony (medicolifepartner.com)
6. Arthum Partner — Workforce Management (arthum.co.in)

EDUCATION
B.Tech CSE (AI) — Dr. APJ Abdul Kalam Technical University, Lucknow (2022–2026)

SKILLS
Flutter, Dart, Firebase, REST APIs, Dio, GetX, BLoC, Provider,
Firestore, SQLite, Git, GitHub, Android Studio, VS Code, Xcode, Postman
`], { type: "text/plain" });
      el.href = URL.createObjectURL(file);
      el.download = "Atin_Sharma_Resume.txt";
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
      setTimeout(() => setDownloaded(false), 4000);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1120]/85 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border-white/12 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0d1626]/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-sora text-white">Atin Sharma — Resume</h3>
                <p className="text-xs font-mono text-blue-400">Flutter Developer • 3+ Years Experience</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 glass-card rounded-xl text-slate-400 hover:text-white border-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-5 text-sm">
            {/* Contact */}
            <div className="p-4 rounded-2xl bg-[#0d1626] border border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h4 className="text-xl font-bold font-sora text-white">Atin Sharma</h4>
                <p className="text-xs text-blue-400 font-semibold">Flutter Developer & Product Builder</p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-blue-400" /> +91 79055 39159</div>
                <div className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-blue-400" /> atin86015@gmail.com</div>
                <div className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-blue-400" /> Lucknow, UP 226201</div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h5>
              <div className="p-4 rounded-xl bg-[#0d1626]/70 border border-white/5 text-xs">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-bold text-white text-sm">Flutter Developer</div>
                    <div className="text-blue-400 font-semibold">Devoy Softech Pvt. Ltd. — Jaipur, Rajasthan</div>
                  </div>
                  <span className="font-mono text-slate-400">2024 – Present</span>
                </div>
                <ul className="space-y-1 text-slate-300 pl-4 list-disc">
                  <li>Developed & maintained cross-platform apps for Android, iOS & Web.</li>
                  <li>Integrated REST APIs, Firebase, push notifications & SDKs.</li>
                  <li>Published & maintained apps on Play Store & App Store.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">Key Projects</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { name: "Surity Fox", sub: "AI Asset Security & Insurance", url: "dealer.suretyfox.in" },
                  { name: "Pharmnex", sub: "Pharmacy Management App", url: "dev.pharmnex.app" },
                  { name: "VerkaufAlles", sub: "Multi-Category Marketplace · Austria", url: "verkaufalles.at" },
                  { name: "Jarro", sub: "QR Restaurant Ordering", url: "admin.jarro.in" },
                  { name: "Medico Life Partner", sub: "Doctors Matrimony Platform", url: "medicolifepartner.com" },
                  { name: "Arthum Partner", sub: "Workforce Management Platform", url: "arthum.co.in" },
                ].map((p) => (
                  <div key={p.name} className="p-3 rounded-xl bg-[#0d1626]/70 border border-white/5">
                    <div className="font-bold text-white">{p.name}</div>
                    <div className="text-slate-400">{p.sub}</div>
                    <div className="text-blue-400 font-mono text-[11px] mt-0.5">{p.url}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h5>
              <div className="p-3 rounded-xl bg-[#0d1626]/70 border border-white/5 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-white">B.Tech in CSE (Artificial Intelligence)</div>
                  <div className="text-slate-400">Dr. APJ Abdul Kalam Technical University, Lucknow</div>
                </div>
                <span className="font-mono text-blue-400 font-bold">2022 – 2026</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-[#0d1626]/60">
            <span className="text-xs font-mono text-slate-400">Official Resume</span>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold font-sora shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {downloading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : downloaded ? (
                <><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Downloaded!</>
              ) : (
                <><Download className="w-4 h-4" /> Download Resume</>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
