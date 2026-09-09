"use client";

import React from "react";
import SkillsSection from "@/components/sections/SkillsSection";
import TechMarquee from "@/components/sections/TechMarquee";

export default function SkillsPage() {
  return (
    <div className="pt-16 pb-8">
      <TechMarquee />
      <SkillsSection />
    </div>
  );
}
