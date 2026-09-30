import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { FaqSection } from "@/components/sections/faq-section";
import { contactFaqs } from "@/data/contact-faqs";

import { AddressSection } from "./components/address-section";
import { BusinessInfo } from "./components/business-info";
import { ContactSection } from "./components/contact-section";

export const metadata: Metadata = {
  title: "Kontakt | WW - ESTHE",
  description:
    "Skontaktuj się z gabinetem WW-Esthe w Szczecinie – adres, mapa dojazdu, godziny otwarcia i komunikatory.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <AddressSection />
      <ContactSection />
      <FaqSection
        id="contact-faq"
        title="Najczęstsze pytania"
        faqs={contactFaqs}
      />
      <BusinessInfo />
    </PageShell>
  );
}
