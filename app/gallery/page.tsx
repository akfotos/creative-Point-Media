import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery · Creative Point Media",
  description:
    "Browse stills, moments, and frames from Creative Point Media campaigns across photography, film, and brand identity.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-32">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
