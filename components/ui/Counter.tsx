"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  variant?: "dark" | "light";
}

export function Counter({ value, suffix = "", label, variant = "dark" }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 1,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeInOut",
    });

    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, value, motionValue, springValue]);

  const textColor = variant === "light" ? "text-white" : "text-accent";
  const labelColor = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`font-display text-6xl font-bold ${textColor} md:text-7xl lg:text-8xl`}
      >
        {display}
        {suffix}
      </motion.div>
      <p className={`mt-3 text-sm uppercase tracking-wider ${labelColor} md:text-base`}>
        {label}
      </p>
    </div>
  );
}
