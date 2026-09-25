"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PHI = 0.618033988749895;

function fract(n: number) {
  return n - Math.floor(n);
}

function seeded(seed: number) {
  return fract(seed * PHI);
}

const orbs = [
  {
    color: "bg-accent",
    size: "h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem]",
    x: "-10%",
    y: "10%",
    z: -200,
    duration: 18,
    delay: 0,
  },
  {
    color: "bg-foreground",
    size: "h-[18rem] w-[18rem] md:h-[28rem] md:w-[28rem]",
    x: "60%",
    y: "30%",
    z: -400,
    duration: 22,
    delay: 2,
  },
  {
    color: "bg-accent",
    size: "h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem]",
    x: "30%",
    y: "60%",
    z: -600,
    duration: 16,
    delay: 4,
  },
  {
    color: "bg-black",
    size: "h-[20rem] w-[20rem] md:h-[32rem] md:w-[32rem]",
    x: "75%",
    y: "65%",
    z: -300,
    duration: 20,
    delay: 1,
  },
];

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        left: seeded(i + 1) * 100,
        top: seeded(i + 5) * 100,
        z: seeded(i + 11) * 400 - 200,
        duration: 4 + seeded(i + 3) * 4,
        delay: seeded(i + 7) * 4,
      })),
    []
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${orb.color} ${orb.size} opacity-[0.04] blur-[100px] md:blur-[140px]`}
            style={{
              left: orb.x,
              top: orb.y,
              translateZ: orb.z,
            }}
            animate={{
              x: ["0%", "8%", "-4%", "0%"],
              y: ["0%", "-6%", "4%", "0%"],
              scale: [1, 1.08, 0.96, 1],
              rotateX: [0, 8, -4, 0],
              rotateY: [0, -6, 10, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}

        {/* subtle grid plane */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, ${"var(--foreground)"} 1px, transparent 1px), linear-gradient(to bottom, ${"var(--foreground)"} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: "rotateX(60deg) translateY(-20%) translateZ(-400px) scale(2)",
            transformOrigin: "center top",
          }}
        />
      </motion.div>

      {/* floating particles */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-accent/20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              translateZ: particle.z,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
