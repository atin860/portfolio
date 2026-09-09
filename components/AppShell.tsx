"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ResumeModal from "@/components/ResumeModal";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenContactModal={handleOpenContact}
      />

      <main className="min-h-screen flex-1">{children}</main>

      <Footer />

      <FloatingCTA onOpenContactModal={handleOpenContact} />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
