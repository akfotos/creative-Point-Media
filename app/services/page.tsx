import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services · Creative Point Media",
  description:
    "End-to-end creative production services: commercial photography, film & video, creative direction, and post-production.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-32">
        <Services />
      </main>
      <Footer />
    </>
  );
}
