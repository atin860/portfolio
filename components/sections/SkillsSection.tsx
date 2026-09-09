"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone, Code2, Flame, Globe, Server, Database,
  Layers, GitBranch, Terminal, Layout, Send, Cpu, Sparkles,
} from "lucide-react";
import { FaGithub, FaAndroid, FaApple } from "react-icons/fa";

type Category = "all" | "frameworks" | "state" | "backend" | "languages" | "tools";

interface Skill {
  name: string;
  category: Category;
  level: number;
  icon: React.ElementType;
  colorClass: string;
  barColor: string;
}

const skills: Skill[] = [
  { name: "Flutter", category: "frameworks", level: 98, icon: Smartphone, colorClass: "text-blue-400", barColor: "from-blue-600 to-sky-400" },
  { name: "Flutter Web", category: "frameworks", level: 92, icon: Globe, colorClass: "text-sky-400", barColor: "from-sky-600 to-blue-400" },
  { name: "Dart", category: "languages", level: 96, icon: Code2, colorClass: "text-indigo-400", barColor: "from-indigo-600 to-blue-400" },
  { name: "HTML5", category: "languages", level: 90, icon: Layout, colorClass: "text-orange-400", barColor: "from-orange-600 to-amber-400" },
  { name: "CSS3", category: "languages", level: 88, icon: Layout, colorClass: "text-blue-300", barColor: "from-blue-500 to-sky-300" },
  { name: "JavaScript", category: "languages", level: 75, icon: Code2, colorClass: "text-yellow-400", barColor: "from-yellow-600 to-amber-400" },
  { name: "GetX", category: "state", level: 95, icon: Layers, colorClass: "text-purple-400", barColor: "from-purple-600 to-indigo-400" },
  { name: "Provider", category: "state", level: 92, icon: Layers, colorClass: "text-blue-400", barColor: "from-blue-600 to-sky-400" },
  { name: "BLoC", category: "state", level: 90, icon: Layers, colorClass: "text-indigo-400", barColor: "from-indigo-600 to-blue-400" },
  { name: "Firebase", category: "backend", level: 95, icon: Flame, colorClass: "text-amber-400", barColor: "from-amber-600 to-orange-400" },
  { name: "REST APIs", category: "backend", level: 95, icon: Globe, colorClass: "text-emerald-400", barColor: "from-emerald-600 to-teal-400" },
  { name: "Dio HTTP", category: "backend", level: 94, icon: Server, colorClass: "text-sky-400", barColor: "from-sky-600 to-blue-400" },
  { name: "Firestore", category: "backend", level: 92, icon: Database, colorClass: "text-amber-300", barColor: "from-amber-500 to-orange-300" },
  { name: "SQLite", category: "backend", level: 85, icon: Database, colorClass: "text-teal-400", barColor: "from-teal-600 to-emerald-400" },
  { name: "Android", category: "tools", level: 92, icon: FaAndroid, colorClass: "text-emerald-400", barColor: "from-emerald-600 to-teal-400" },
  { name: "iOS / Xcode", category: "tools", level: 86, icon: FaApple, colorClass: "text-sky-400", barColor: "from-sky-600 to-blue-400" },
  { name: "Git", category: "tools", level: 90, icon: GitBranch, colorClass: "text-orange-400", barColor: "from-orange-600 to-amber-400" },
  { name: "GitHub", category: "tools", level: 92, icon: FaGithub, colorClass: "text-slate-300", barColor: "from-slate-500 to-slate-300" },
  { name: "VS Code", category: "tools", level: 94, icon: Cpu, colorClass: "text-blue-400", barColor: "from-blue-600 to-sky-400" },
  { name: "Postman", category: "tools", level: 90, icon: Send, colorClass: "text-orange-400", barColor: "from-orange-600 to-amber-400" },
  { name: "Node.js", category: "backend", level: 72, icon: Server, colorClass: "text-emerald-400", barColor: "from-emerald-600 to-teal-400" },
  { name: "UI/UX Design", category: "frameworks", level: 88, icon: Terminal, colorClass: "text-pink-400", barColor: "from-pink-600 to-rose-400" },
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frameworks", name: "Frameworks & Design" },
  { id: "state", name: "State Management" },
  { id: "backend", name: "Backend & Database" },
  { id: "languages", name: "Languages" },
  { id: "tools", name: "Dev Tools" },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card glass-card-hover p-5 rounded-2xl border-white/10 space-y-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl bg-[#0d1626] border border-white/5 group-hover:scale-110 transition-transform`}>
            <skill.icon className={`w-5 h-5 ${skill.colorClass}`} />
          </div>
          <span className="text-sm font-semibold text-slate-200 font-sora group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className={`text-xs font-mono font-bold ${skill.colorClass}`}>{skill.level}%</span>
      </div>

      {/* Animated Skill Bar */}
      <div className="h-2 bg-slate-900/80 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.barColor} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0d1626]/40">
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Technical Mastery
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400">
            Proficiency levels built through real-world production app development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as Category)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold font-sora transition-all duration-300 ${
                active === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-105"
                  : "glass-card text-slate-400 hover:text-white border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 0.04} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
