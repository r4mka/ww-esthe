import { treatments } from "@/data/treatments";

import { TreatmentListItem } from "./treatment-list-item";
import styles from "./treatment-list.module.css";

export const TreatmentList = () => (
  <div className={styles.list}>
    {treatments.map((treatment) => (
      <TreatmentListItem key={treatment.slug} treatment={treatment} />
    ))}
  </div>
);
