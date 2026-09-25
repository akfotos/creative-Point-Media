import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWorks } from "@/components/sections/FeaturedWorks";
import { ServicesHighlight } from "@/components/sections/ServicesHighlight";
import { Process } from "@/components/sections/Process";
import { Clients } from "@/components/sections/Clients";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex-1">
        <Hero />
        <FeaturedWorks />
        <ServicesHighlight />
        <Process />
        <Clients />
        <HomeCTA />
      </main>
      <Footer />

      {/* Subtle cinematic grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
