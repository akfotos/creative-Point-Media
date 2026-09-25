import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact · Creative Point Media",
  description:
    "Get in touch with Creative Point Media. Let's build your next campaign.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-32">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
