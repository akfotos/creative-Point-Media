"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function HomeCTA() {
  return (
    <section className="relative bg-background py-24 md:py-32">
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
              Ready to build your next campaign?
            </h2>
            <p className="mt-4 text-base text-muted md:text-lg">
              Tell us what you&apos;re making. We&apos;ll respond within two business
              days with a clear plan, timeline, and estimate.
            </p>
          </div>
          <Button href="/contact" className="lg:text-base">
            Book a Project
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
