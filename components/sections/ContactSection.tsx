"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactSectionProps {
  prefilledSubject?: string;
}

export default function ContactSection({ prefilledSubject = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: prefilledSubject, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ["#3B82F6", "#60A5FA", "#93C5FD"] });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0d1626]/40">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white">
            Let&apos;s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-400">Ready to bring your app idea to life? Reach out directly.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-8 rounded-3xl border-white/10 flex flex-col gap-7"
          >
            {/* Profile Photo */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 p-[2px] shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111827]">
                    <Image src="/profile.jpeg" alt="Atin Sharma" fill sizes="64px" className="object-cover object-top" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold font-sora text-white">Atin Sharma</h3>
                <p className="text-xs text-blue-400 font-mono">Flutter Developer & Product Builder</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Whether it&apos;s a mobile app project, a freelance opportunity, or just a hello — my inbox is always open. I&apos;ll respond within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <a href="mailto:atin86015@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1626] border border-white/5 hover:border-blue-500/40 transition-colors group">
                <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                  <div className="text-sm font-semibold text-white">atin86015@gmail.com</div>
                </div>
              </a>

              <a href="tel:+917905539159" className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1626] border border-white/5 hover:border-blue-500/40 transition-colors group">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                  <div className="text-sm font-semibold text-white">+91 79055 39159</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1626] border border-white/5">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">Lucknow, Uttar Pradesh 226201</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">Follow Me</p>
              <div className="flex gap-3">
                <a href="https://github.com/atin860" target="_blank" rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-card flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white border-white/10 hover:border-blue-500/40 transition-all">
                  <FaGithub className="w-4 h-4 text-blue-400" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/atin-sharma-579a10295/" target="_blank" rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-card flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 hover:text-white border-white/10 hover:border-blue-500/40 transition-all">
                  <FaLinkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border-white/10"
          >
            <h3 className="text-2xl font-bold font-sora text-white mb-6">Send a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h4 className="text-2xl font-bold font-sora text-white">Message Sent! 🎉</h4>
                <p className="text-sm text-slate-300 max-w-xs">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400">Name <span className="text-blue-400">*</span></label>
                    <input
                      type="text" required placeholder="John Doe"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1626] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400">Email <span className="text-blue-400">*</span></label>
                    <input
                      type="email" required placeholder="john@example.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1626] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400">Subject <span className="text-blue-400">*</span></label>
                  <input
                    type="text" required placeholder="Flutter App Development Project"
                    value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1626] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400">Message <span className="text-blue-400">*</span></label>
                  <textarea
                    required rows={5} placeholder="Tell me about your project — platform, features, timeline..."
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1626] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-sora text-sm font-bold shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <><Send className="w-4 h-4" /> <span>Send Message</span></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
