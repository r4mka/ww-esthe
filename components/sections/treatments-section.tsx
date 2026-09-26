import Link from "next/link";

import { TreatmentListItem } from "@/components/treatment-list-item";
import { treatments } from "@/data/treatments";

import styles from "@/components/treatment-list.module.css";

export const TreatmentsSection = () => (
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
    <div className={`${styles.list} ${styles.grid}`}>
      {treatments.slice(0, 3).map((treatment) => (
        <TreatmentListItem
          key={treatment.slug}
          treatment={treatment}
          variant="grid"
        />
      ))}
    </div>
    <Link className="button button-secondary" href="/zabiegi">
      Poznaj całą ofertę
    </Link>
  </section>
);
