"use client";

import React from "react";
import AboutSection from "@/components/sections/AboutSection";
import AchievementsSection from "@/components/sections/AchievementsSection";

export default function AboutPage() {
  return (
    <div className="pt-16 pb-8">
      <AboutSection />
      <AchievementsSection />
    </div>
  );
}
