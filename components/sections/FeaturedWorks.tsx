"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const featured = projects.slice(0, 4);

export function FeaturedWorks() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Works
            </span>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Campaigns that move people.
            </h2>
          </div>
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              className="group relative overflow-hidden rounded-xl bg-background"
            >
              <Link href="/projects" className="block">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 via-[#000]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold uppercase leading-tight text-white md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {project.client} — {project.year}
                  </p>
                </div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
