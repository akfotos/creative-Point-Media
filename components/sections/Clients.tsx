"use client";

import { motion } from "framer-motion";
import { clients, testimonials } from "@/lib/data";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";
import { TestimonialSlider } from "../ui/TestimonialSlider";

export function Clients() {
  return (
    <section className="overflow-hidden border-y border-black/5 bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Partners"
          title="Trusted by ambitious brands & agencies"
          align="center"
          className="mb-16"
        />
      </Container>

      <div className="mb-24 border-y border-black/5 bg-background py-6">
        <Marquee className="text-lg font-semibold uppercase tracking-wider text-foreground md:text-xl">
          {clients.map((client) => (
            <span
              key={client}
              className="inline-flex items-center gap-4 whitespace-nowrap"
            >
              {client}
              <span className="h-2 w-2 rounded-full bg-black/20" />
            </span>
          ))}
        </Marquee>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <TestimonialSlider testimonials={testimonials} />
        </motion.div>
      </Container>
    </section>
  );
}
