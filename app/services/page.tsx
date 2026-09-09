"use client";

import React from "react";
import ServicesSection from "@/components/sections/ServicesSection";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="pt-16 pb-8">
      <ServicesSection onOpenContactModal={() => router.push("/contact")} />
    </div>
  );
}
