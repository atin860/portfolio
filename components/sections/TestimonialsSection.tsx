"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Atin built our Pharmnex pharmacy management app with incredible speed and precision. His expertise in Flutter, Firestore, and REST API integration delivered a flawless product.",
      author: "Pharmnex Product Team",
      role: "Client & Operations Lead",
      company: "Devoy Softech Partner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Atin's attention to mobile UI performance and state management in Surity Fox and Jarro was top-tier. He developed our QR table ordering and security verification apps seamlessly on both Play Store and App Store.",
      author: "Jarro Admin Lead",
      role: "Operations Lead",
      company: "Jarro Hospitality",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Atin delivered clean Flutter Web modules for our Arthum workforce management platform. Highly recommended for any serious cross-platform mobile and web application build!",
      author: "Devoy Softech Engineering",
      role: "Senior Tech Manager",
      company: "Devoy Softech Pvt. Ltd.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-sora text-white"
          >
            Client & Team <span className="text-gradient">Feedback</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base"
          >
            Feedback on production Flutter applications and software engineering deliverables.
          </motion.p>
        </div>

        {/* Testimonials Carousel Box */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border-white/10 relative overflow-hidden flex flex-col justify-between space-y-8 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-cyan-400/20 absolute top-6 right-6 pointer-events-none" />

              {/* Rating Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-slate-200 font-sora italic leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold font-sora text-white">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full glass-card text-slate-300 hover:text-white border-white/10 hover:border-cyan-500/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === i ? "w-8 bg-cyan-400" : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full glass-card text-slate-300 hover:text-white border-white/10 hover:border-cyan-500/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
