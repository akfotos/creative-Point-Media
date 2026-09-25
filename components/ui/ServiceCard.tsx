"use client";

import { motion } from "framer-motion";
import { Service } from "@/lib/data";
import { Icon } from "./Icon";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className="group flex flex-col rounded-2xl border border-black/[0.06] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 md:p-8"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 transition-colors duration-300 group-hover:bg-accent/10">
        <Icon
          name={service.icon}
          className="text-foreground"
          size={22}
        />
      </div>

      <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground md:text-2xl">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
        {service.overview}
      </p>

      <ul className="mt-6 space-y-2 border-t border-black/5 pt-6">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-foreground/60" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
