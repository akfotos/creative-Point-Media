"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Button } from "./Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-full flex-col px-6 py-24">
            <div className="absolute left-6 top-5">
              <Link
                href="/"
                onClick={onClose}
                className="block rounded-lg border border-accent/20 bg-accent/[0.04] px-2 py-1 shadow-sm"
              >
                <img
                  src="/logo-dark.png"
                  alt="Creative Point Media"
                  className="logo-adaptive-dark h-auto w-full max-h-24 object-contain object-left drop-shadow-sm"
                />
                <img
                  src="/logo-light.png"
                  alt="Creative Point Media"
                  className="logo-adaptive-light h-auto w-full max-h-24 object-contain object-left"
                />
              </Link>
            </div>

            <button
              onClick={onClose}
              className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`font-display text-4xl font-semibold uppercase tracking-tight transition-opacity hover:opacity-60 ${
                      isActive(link.href) ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Button href="/contact" onClick={onClose} className="w-full">
                Book a Project
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
