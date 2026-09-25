"use client";

import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 md:py-32">
      <Container>
        <div className="mb-16 md:mb-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-end creative production"
            description="From the first treatment to final delivery, we shape every detail of a campaign."
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
