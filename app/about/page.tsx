import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About · Creative Point Media",
  description:
    "Creative Point Media is a multidisciplinary visual production studio crafting bold stories through photography, film, and brand identity.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-32">
        <About />
      </main>
      <Footer />
    </>
  );
}
