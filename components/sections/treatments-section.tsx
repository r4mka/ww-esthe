import Link from "next/link";

import { TreatmentList } from "@/components/treatment-list";

export function TreatmentsSection() {
  return (
    <section
      className="section-shell"
      id="offer"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Oferta</p>
        <h2 id="services-title">Zabiegi</h2>
        <p>Wybrane zabiegi dopasowane do Twoich potrzeb.</p>
      </div>
      <TreatmentList limit={3} compact />
      <Link className="button button-secondary" href="/zabiegi">
        Poznaj całą ofertę
      </Link>
    </section>
  );
}
