"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Container } from "../ui/Container";
import { Icon } from "../ui/Icon";

export function ServicesHighlight() {
  return (
    <section className="relative bg-background py-24 md:py-32">
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
            End-to-end creative production.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              className="group flex flex-col rounded-2xl border border-black/[0.06] bg-surface p-6 transition-colors duration-300 hover:border-accent/30 md:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-accent/[0.06] transition-colors group-hover:bg-accent/10">
                <Icon name={service.icon} className="text-accent" size={22} />
              </div>

              <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground md:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {service.overview}
              </p>

              <ul className="mt-6 space-y-2 border-t border-black/5 pt-6">
                {service.deliverables.slice(0, 2).map((item) => (
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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Explore Services
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
