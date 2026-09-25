"use client";

import { motion } from "framer-motion";
import { Category } from "@/lib/data";

interface FilterTabsProps {
  categories: Category[];
  active: Category;
  onSelect: (category: Category) => void;
}

export function FilterTabs({ categories, active, onSelect }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors md:px-5 md:text-sm ${
              isActive ? "text-white" : "text-muted hover:text-accent"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full bg-wine"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
