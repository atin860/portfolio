"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Smartphone, Cpu, Star, Sparkles } from "lucide-react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = duration / end;
        let current = 0;
        const timer = setInterval(() => {
          current++;
          setCount(current);
          if (current >= end) clearInterval(timer);
        }, step);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Award, label: "Years Experience", end: 3, suffix: "+", color: "text-blue-400 border-blue-500/30" },
  { icon: Smartphone, label: "Production Apps", end: 6, suffix: "+", color: "text-sky-400 border-sky-500/30" },
  { icon: Cpu, label: "App Store Approval", end: 100, suffix: "%", color: "text-purple-400 border-purple-500/30" },
  { icon: Star, label: "Client Satisfaction", end: 100, suffix: "%", color: "text-emerald-400 border-emerald-500/30" },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-700/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Key Metrics
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border-white/10 flex flex-col items-center text-center gap-4"
            >
              <div className={`p-3.5 rounded-2xl bg-[#0d1626] border ${stat.color}`}>
                <stat.icon className={`w-7 h-7 ${stat.color.split(" ")[0]}`} />
              </div>
              <div>
                <div className="text-4xl font-extrabold font-sora text-white">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase text-slate-400 tracking-widest font-mono mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
