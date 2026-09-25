import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Portfolio } from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Projects · Creative Point Media",
  description:
    "A curated selection of campaigns, films, and brand identity projects by Creative Point Media.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-32">
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
