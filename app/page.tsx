"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection, { Project } from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState("");

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject || "");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={() => handleOpenContact()}
      />

      <main className="min-h-screen">
        <HeroSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenContactModal={() => handleOpenContact()}
        />
        <AboutSection />
        <AchievementsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <ServicesSection onOpenContactModal={handleOpenContact} />
        <ContactSection prefilledSubject={contactSubject} />
      </main>

      <Footer />

      <FloatingCTA onOpenContactModal={() => handleOpenContact()} />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
