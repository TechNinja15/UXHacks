"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide global Navbar/Footer on the full-screen project preview page
  // e.g., /showcase/cmoeahnjs...
  const isProjectPreview = pathname.startsWith('/showcase/') && pathname !== '/showcase' && pathname !== '/showcase/post';

  return (
    <>
      {!isProjectPreview && <Navbar />}
      {children}
      {!isProjectPreview && <Footer />}
    </>
  );
}
