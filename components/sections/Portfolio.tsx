"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, categories, Category } from "@/lib/data";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FilterTabs } from "../ui/FilterTabs";
import { ProjectCard } from "../ui/ProjectCard";

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="relative bg-background py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Campaigns, films & identities"
            description="A curated selection of projects where craft, culture, and commercial impact converge."
          />
          <FilterTabs
            categories={categories}
            active={active}
            onSelect={setActive}
          />
        </div>
      </Container>

      <Container>
        <LayoutGroup>
          <motion.div
            layout
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  featured={i === 0 && active === "All"}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>
    </section>
  );
}
