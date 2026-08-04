"use client";

import { Code2, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070D1A] border-t border-white/8 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-[1px]">
                <div className="w-full h-full bg-[#0B1120] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="text-lg font-bold font-sora text-white">
                ATIN <span className="text-blue-400">SHARMA</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs italic">
              &ldquo;Building scalable, clean, and user-centric mobile solutions.&rdquo;
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-400">
              {["Home", "About", "Experience", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: "https://github.com/atin860", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/atin-sharma-579a10295/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:atin86015@gmail.com", label: "Email" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="p-2.5 glass-card rounded-xl text-slate-400 hover:text-blue-400 border-white/10 hover:border-blue-500/40 transition-all"
                    aria-label={s.label}>
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-xs font-semibold text-slate-300 hover:text-white border-white/10 hover:border-blue-500/40 transition-all w-fit group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-blue-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Atin Sharma. All rights reserved.</p>
          <p className="font-mono">Flutter Developer & Product Builder • Lucknow, India</p>
        </div>
      </div>
    </footer>
  );
}
