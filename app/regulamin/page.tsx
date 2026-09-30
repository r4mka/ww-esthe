import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legalLastUpdated, termsSections } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Regulamin | WW - ESTHE",
  description: "Zasady umawiania i realizacji zabiegów w WW - ESTHE.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      title="Regulamin"
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
