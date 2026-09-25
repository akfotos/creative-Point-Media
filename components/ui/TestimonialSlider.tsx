"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute -left-4 -top-6 text-accent/10 md:-left-8 md:-top-10">
        <Quote size={64} strokeWidth={1} />
      </div>

      <div className="relative min-h-[240px] md:min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[index].id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-6"
          >
            <p className="text-xl font-light leading-relaxed text-foreground md:text-2xl lg:text-3xl">
              “{testimonials[index].quote}”
            </p>
            <footer className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10" />
              <div>
                <cite className="not-italic font-medium text-foreground">
                  {testimonials[index].author}
                </cite>
                <p className="text-sm text-muted">
                  {testimonials[index].role}, {testimonials[index].company}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-foreground transition-colors hover:bg-black/5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-foreground transition-colors hover:bg-black/5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
