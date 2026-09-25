"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Clapperboard, Film } from "lucide-react";
import { Container } from "../ui/Container";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover & Define",
    description:
      "We start with your audience, objectives, and cultural context to build a strategy that drives every creative decision.",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design & Direct",
    description:
      "From moodboards to shot lists, we craft a visual language that feels intentional, premium, and unmistakably yours.",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Produce & Capture",
    description:
      "We run the shoot, edit, grade, retouch, and finish — keeping craft high and the process smooth from start to delivery.",
  },
  {
    number: "04",
    icon: Film,
    title: "Deliver & Amplify",
    description:
      "Final assets are delivered ready for every channel, from social cutdowns to full broadcast campaigns.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-surface py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How We Work
          </span>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
            From brief to bold campaign.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <span className="font-display text-6xl font-bold text-accent/10 md:text-7xl">
                {step.number}
              </span>
              <div className="relative -mt-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-accent/[0.06]">
                  <step.icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold uppercase leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
