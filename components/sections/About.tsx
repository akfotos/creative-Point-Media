"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Clapperboard, PenTool } from "lucide-react";
import { stats } from "@/lib/data";
import { Container } from "../ui/Container";
import { Counter } from "../ui/Counter";
import { Button } from "../ui/Button";

const values = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Campaign stills, editorial stories, and product imagery built to stop the scroll.",
  },
  {
    icon: Clapperboard,
    title: "Film & Motion",
    description:
      "Brand films, commercials, and motion content from concept to final color.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Strategic identity systems that turn culture into unmistakable visual language.",
  },
];

export function About() {
  return (
    <div className="relative bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden md:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1920&q=80"
            alt="Creative Point Media studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="absolute inset-0 bg-[#000]/30" />
        </div>

        <Container className="relative z-10 pb-16 pt-44 md:pb-24 md:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              About
            </span>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Creative Point Media
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              A multidisciplinary visual production studio crafting bold
              stories through photography, film, and brand identity.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="lg:col-span-5"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Studio DNA
              </span>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Obsessed with craft, driven by culture.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
              className="lg:col-span-7"
            >
              <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
                <p>
                  Creative Point Media is a multidisciplinary studio built for
                  brands that want to be felt before they are explained. We
                  operate at the intersection of photography, film, and brand
                  identity — turning raw ideas into premium, culture-shaping
                  content.
                </p>
                <p>
                  Every project starts with strategy and ends with meticulous
                  execution. Whether it&apos;s a global campaign, a product launch,
                  or a full rebrand, our team treats every frame as an
                  opportunity to create something iconic.
                </p>
                <p>
                  Based in Ghana — Accra, we work with ambitious brands and
                  agencies around the world who believe craft and culture are
                  the fastest way to build trust.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-y border-black/5 bg-wine py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  variant="light"
                />
              </motion.div>
            ))}
          </div>
        </Container>

        {/* decorative circle */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 md:h-96 md:w-96" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 md:h-[28rem] md:w-[28rem]" />
      </section>

      {/* Values */}
      <section className="bg-surface py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mb-16 max-w-2xl"
          >
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              What we do best
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="group rounded-2xl border border-black/5 bg-background p-6 transition-colors duration-300 hover:border-accent/30 md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-accent/[0.06] transition-colors group-hover:bg-accent/10">
                  <value.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground md:text-2xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-start justify-between gap-10 rounded-3xl border border-black/5 bg-surface p-8 md:flex-row md:items-end md:p-12"
          >
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Start a Project
              </span>
              <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
                Let&apos;s build your next campaign.
              </h2>
              <p className="mt-4 text-base text-muted md:text-lg">
                Tell us what you&apos;re making. We&apos;ll respond within two business
                days.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Book a Project</Button>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                View Works
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
