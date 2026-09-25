"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { studioInfo, services as serviceOptions } from "@/lib/data";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

interface FormState {
  name: string;
  email: string;
  budget: string;
  overview: string;
  services: string[];
}

const budgetOptions = [
  "$5k – $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k+",
];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    budget: "",
    overview: "",
    services: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.budget) newErrors.budget = "Please select a budget range";
    if (form.services.length === 0)
      newErrors.services = "Select at least one service";
    if (!form.overview.trim())
      newErrors.overview = "Please share a brief project overview";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative bg-surface py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Start a Project"
              title="Let's build your next campaign."
              description="Tell us what you're making. We'll respond within two business days."
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
              className="mt-12 space-y-8"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Location
                </h3>
                <p className="mt-2 text-lg text-foreground">
                  {studioInfo.location}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Email
                </h3>
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="mt-2 inline-block text-lg text-foreground transition-colors hover:text-muted"
                >
                  {studioInfo.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Phone
                </h3>
                <a
                  href={`tel:${studioInfo.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-2 inline-block text-lg text-foreground transition-colors hover:text-muted"
                >
                  {studioInfo.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Follow
                </h3>
                <div className="mt-3 flex flex-wrap gap-4">
                  {studioInfo.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted"
                    >
                      {social.label}
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="rounded-2xl border border-black/[0.06] bg-background p-6 md:p-8"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Check size={28} className="text-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase text-foreground">
                  Inquiry received
                </h3>
                <p className="mt-3 max-w-sm text-muted">
                  Thanks for reaching out. We&apos;ll review your project and be
                  in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-lg border border-black/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-lg border border-black/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, budget: e.target.value }))
                    }
                    className="w-full appearance-none rounded-lg border border-black/10 bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-2 text-xs text-red-400">{errors.budget}</p>
                  )}
                </div>

                <div>
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted">
                    Services Required
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {serviceOptions.map((service) => {
                      const selected = form.services.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors ${
                            selected
                              ? "bg-wine text-white"
                              : "border border-black/10 bg-surface text-muted hover:text-accent hover:border-accent/30"
                          }`}
                        >
                          {service.title}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.services}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="overview"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Project Overview
                  </label>
                  <textarea
                    id="overview"
                    rows={5}
                    value={form.overview}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, overview: e.target.value }))
                    }
                    className="w-full resize-none rounded-lg border border-black/10 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                  {errors.overview && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.overview}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  {loading ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
