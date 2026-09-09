"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Globe } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Flutter Developer",
      company: "Devoy Softech Pvt. Ltd.",
      website: "https://devoysoftech.com",
      location: "Jaipur, Rajasthan",
      period: "2024 – Present",
      type: "Full-Time",
      current: true,
      description:
        "Engineered production-ready cross-platform mobile applications for Android, iOS, and Web using Flutter 3.x, Dart, Firebase, and REST APIs. Published and maintained live applications on Google Play Store and Apple App Store.",
      achievements: [
        "Developed and maintained multi-platform apps using Flutter for Android, iOS, and Web.",
        "Integrated REST APIs, Firebase Auth, Firestore, push notifications, and third-party SDKs.",
        "Built responsive and reusable UI components following clean architecture principles.",
        "Published and maintained production applications on Google Play Store and Apple App Store.",
        "Implemented state management using GetX, BLoC, and Provider patterns.",
      ],
      apps: ["Surity Fox", "Pharmnex", "VerkaufAlles", "Jarro", "Medico Life Partner", "Arthum Partner"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0d1626]/40">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Work History
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/60 via-blue-500/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="relative pl-16 sm:pl-20 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-5.5 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 shadow-[0_0_15px_rgba(59,130,246,0.7)] border-2 border-[#0d1626]" />

              {/* Card */}
              <div className="glass-card glass-card-hover p-7 rounded-3xl border-white/10 space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Current
                        </span>
                      )}
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950/60 text-blue-400 border border-blue-500/30">
                        <FaGooglePlay className="w-2.5 h-2.5" />
                        <FaApple className="w-2.5 h-2.5" />
                        Published
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-sora text-white">{exp.role}</h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company} <Globe className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="text-xs text-slate-400 font-mono space-y-1 sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-slate-200 font-semibold">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((ach, ai) => (
                    <div key={ai} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Apps built chips */}
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Apps Built & Shipped
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.apps.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 rounded-lg bg-blue-950/50 border border-blue-500/25 text-[11px] font-mono text-blue-300"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
