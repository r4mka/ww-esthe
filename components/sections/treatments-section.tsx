import Link from "next/link";

import { PageSection } from "@/components/page-section";
import { TreatmentListItem } from "@/components/treatment-list-item";
import { treatments } from "@/data/treatments";

import styles from "@/components/treatment-list.module.css";

export const TreatmentsSection = () => (
  <PageSection
    id="popularne-zabiegi"
    eyebrow="Oferta"
    title="Zabiegi"
    description="Wybrane zabiegi dopasowane do Twoich potrzeb."
  >
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
  </PageSection>
);
