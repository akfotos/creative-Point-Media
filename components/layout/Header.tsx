"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MobileMenu } from "../ui/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const onDarkHero = isHome && !scrolled;

  const navText = onDarkHero ? "text-white" : "text-foreground";
  const mutedText = onDarkHero ? "text-white/70" : "text-muted";
  const borderColor = onDarkHero ? "border-white/20" : "border-black/10";
  const hoverBg = onDarkHero ? "hover:bg-white/10" : "hover:bg-black/5";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/5 bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-36 items-center justify-between md:h-40">
            <Link href="/" className="flex h-full items-center">
              {onDarkHero ? (
                <img
                  src="/logo-light.png"
                  alt="Creative Point Media"
                  className="h-32 w-auto max-w-[420px] object-contain object-left md:h-36 md:max-w-[620px]"
                />
              ) : (
                <>
                  <img
                    src="/logo-dark.png"
                    alt="Creative Point Media"
                    className="logo-adaptive-dark h-32 w-auto max-w-[420px] object-contain object-left md:h-36 md:max-w-[620px]"
                  />
                  <img
                    src="/logo-light.png"
                    alt="Creative Point Media"
                    className="logo-adaptive-light h-32 w-auto max-w-[420px] object-contain object-left md:h-36 md:max-w-[620px]"
                  />
                </>
              )}
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? navText
                      : `${mutedText} ${onDarkHero ? "hover:text-white" : "hover:text-foreground"}`
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full ${
                      onDarkHero ? "bg-white" : "bg-foreground"
                    } ${isActive(link.href) ? "w-full" : "w-0"}`}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button href="/contact">Book a Project</Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${borderColor} ${navText} ${hoverBg}`}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
