import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legalLastUpdated, privacyPolicySections } from "@/data/legal-content";

export const metadata: Metadata = {
  title: "Polityka prywatności | WW - ESTHE",
  description:
    "Zasady przetwarzania danych osobowych oraz plików cookie na stronie WW - ESTHE.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Polityka prywatności"
      lastUpdated={legalLastUpdated}
      sections={privacyPolicySections}
    />
  );
}
