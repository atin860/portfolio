import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollProgress from "@/components/ScrollProgress";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atin Sharma | Flutter Developer & Product Builder Portfolio",
  description:
    "Official Portfolio of Atin Sharma, Flutter Developer & Product Builder with 3+ years experience building cross-platform Android, iOS, and Web applications.",
  keywords: [
    "Atin Sharma",
    "Flutter Developer",
    "Product Builder",
    "Devoy Softech",
    "Pharmnex",
    "Surity Fox",
    "VerkaufAlles",
    "Jarro",
    "Software Engineer",
    "Lucknow",
    "Dart",
    "Firebase",
  ],
  authors: [{ name: "Atin Sharma" }],
  openGraph: {
    title: "Atin Sharma | Flutter Developer & Product Builder",
    description:
      "Flutter Developer with 3+ years experience building production apps for Play Store & App Store.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${sora.variable} h-full antialiased scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-full bg-[#0B1120] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <LenisProvider>
          <ScrollProgress />
          <CustomCursor />
          <ParticleCanvas />
          <div className="relative z-10 flex-1 flex flex-col">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
