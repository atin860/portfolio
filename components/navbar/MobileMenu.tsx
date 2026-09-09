"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { NavLink } from "./NavigationMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
  onOpenResumeModal: () => void;
  onOpenContactModal: () => void;
}

export default function MobileMenu({
  isOpen,
  onToggle,
  onClose,
  links,
  activeSection,
  onOpenResumeModal,
  onOpenContactModal,
}: MobileMenuProps) {
  return (
    <>
      <div className="lg:hidden flex items-center space-x-2">
        <button
          onClick={onToggle}
          className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white border-white/10"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-blue-400" />
          ) : (
            <Menu className="w-5 h-5 text-slate-300" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-white/10 mt-3 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {links.map((link) => {
                const isActive =
                  activeSection === link.href ||
                  activeSection === link.href.replace(/^\//, "") ||
                  (link.href === "/" && (activeSection === "home" || activeSection === "/" || activeSection === ""));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-white font-semibold bg-blue-500/15 border border-blue-500/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenResumeModal();
                  }}
                  className="w-full py-3 glass-card rounded-xl text-xs font-semibold text-slate-200 flex items-center justify-center space-x-2 border-white/10 hover:border-blue-500/40 transition-colors"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Download Resume</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenContactModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
