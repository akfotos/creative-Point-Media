"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navLinks, studioInfo } from "@/lib/data";
import { Container } from "../ui/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-wine text-white">
      {/* Footer info + CTA */}
      <section className="py-10 md:py-12">
        <Container>
          {/* CTA row */}
          <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-3xl"
            >
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Start a Project
              </span>
              <h2 className="font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-3xl">
                Let&apos;s build your next campaign.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                From brand films to campaign photography, we craft visual work
                that moves audiences and drives results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-wine transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Project
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:col-span-1"
            >
              <img
                src="/logo-light.png"
                alt="Creative Point Media"
                className="h-auto w-auto max-h-16 object-contain object-left md:max-h-20"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                Creative Point Media is a multidisciplinary studio crafting
                bold stories through photography, film, and brand identity.
              </p>
            </motion.div>

            {/* Navigation column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeInOut" }}
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Navigate
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="group inline-flex w-fit items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                >
                  Home
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex w-fit items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>{studioInfo.email}</span>
                </a>
                <a
                  href={`tel:${studioInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>{studioInfo.phone}</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{studioInfo.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Social column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Follow
              </h3>
              <div className="flex flex-col gap-3">
                {studioInfo.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Bottom bar */}
      <section className="border-t border-white/10 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-white/50">
              &copy; {currentYear} Creative Point Media. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <button
                onClick={scrollToTop}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
}
