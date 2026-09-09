"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection, { Project } from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectModal from "@/components/ProjectModal";
import ResumeModal from "@/components/ResumeModal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <HeroSection
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={() => handleOpenContact()}
      />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={setSelectedProject} />
      <ServicesSection onOpenContactModal={handleOpenContact} />
      <ContactSection />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
