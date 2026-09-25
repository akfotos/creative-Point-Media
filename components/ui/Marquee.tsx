"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function Marquee({
  children,
  reverse = false,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden whitespace-nowrap ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {children}
      </div>
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
