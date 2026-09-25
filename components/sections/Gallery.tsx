"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { projects } from "@/lib/data";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const galleryImages = [
  ...projects.map((p) => ({ src: p.image, category: p.category, title: p.title })),
  {
    src: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=1200&q=80",
    category: "Photography",
    title: "Azure Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    category: "Film & Motion",
    title: "Campaign Still",
  },
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
    category: "Production",
    title: "Studio Moment",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    category: "Photography",
    title: "Runway Detail",
  },
];

const categories = ["All", "Photography", "Film & Motion", "Brand Identity", "Production"];
type Category = (typeof categories)[number];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <section id="gallery" className="relative bg-background py-24 md:py-32">
        <Container>
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Visual Gallery"
              title="A look behind the work."
              description="Stills, moments, and frames from campaigns across photography, film, and brand identity."
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors md:px-5 md:text-sm ${
                    active === category
                      ? "text-white"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {active === category && (
                    <motion.span
                      layoutId="galleryFilter"
                      className="absolute inset-0 rounded-full bg-wine"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, i) => (
                <motion.figure
                  key={`${image.src}-${image.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.03, ease: "easeInOut" }}
                  className="group relative mb-4 cursor-zoom-in overflow-hidden rounded-xl bg-surface lg:mb-6"
                  onClick={() => setLightbox(image.src)}
                >
                  <div className="relative w-full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={800}
                      height={1000}
                      className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      {image.category}
                    </span>
                    <span className="font-display text-lg font-semibold uppercase text-white">
                      {image.title}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery preview"
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-full rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
