"use client";

import React, { useState } from "react";
import ProjectsSection, { Project } from "@/components/sections/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-16 pb-8">
      <ProjectsSection onSelectProject={setSelectedProject} />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
