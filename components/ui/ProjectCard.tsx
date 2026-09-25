"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`group relative overflow-hidden rounded-xl bg-surface ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <a href="#" className="block h-full w-full">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 via-[#000]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
          <div>
            <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md md:text-xs">
              {project.category}
            </span>
            <h3 className="font-display text-lg font-semibold uppercase leading-tight text-white md:text-xl lg:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {project.client} — {project.year}
            </p>
          </div>

          <div className="flex h-10 w-10 translate-x-2 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:h-12 md:w-12">
            <ArrowUpRight
              className="h-4 w-4 text-white md:h-5 md:w-5"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </a>
    </motion.article>
  );
}
