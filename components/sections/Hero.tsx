"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { clients } from "@/lib/data";
import { Container } from "../ui/Container";
import { Marquee } from "../ui/Marquee";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-8 pt-44 md:pt-56"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 via-[#000]/40 to-[#000]/20" />
        <div className="absolute inset-0 bg-[#000]/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
          >
            Creative Point Media
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Creative Point Media — Crafting Bold Stories.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeInOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            Commercial Photography · Film Direction · Brand Identity ·
            Post-Production
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 hidden items-center gap-2 md:flex"
        >
          <span className="text-xs uppercase tracking-widest text-white/70">
            Scroll
          </span>
          <ArrowDown size={14} className="animate-bounce text-white/70" />
        </motion.div>
      </Container>

      <div className="relative z-10 mt-auto border-t border-white/10 bg-black/40 py-4 backdrop-blur-md">
        <Marquee className="text-sm uppercase tracking-widest text-white/70">
          {clients.map((client) => (
            <span
              key={client}
              className="inline-flex items-center gap-3 whitespace-nowrap"
            >
              {client}
              <span className="h-1 w-1 rounded-full bg-white/50" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
