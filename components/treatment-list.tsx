import Image from "next/image";
import Link from "next/link";

import { getTreatmentImage, treatments } from "@/data/treatments";

import styles from "./treatment-list.module.css";

type TreatmentListProps = {
  limit?: number;
  compact?: boolean;
};

export function TreatmentList({ limit, compact = false }: TreatmentListProps) {
  const visibleTreatments = limit ? treatments.slice(0, limit) : treatments;
  const listClassName = compact
    ? `${styles.list} ${styles.compact}`
    : styles.list;

  return (
    <div className={listClassName}>
      {visibleTreatments.map((treatment) => (
        <article className={styles.item} key={treatment.slug}>
          <div className={styles.row}>
            <Link
              className={styles.imageLink}
              href={`/zabiegi/${treatment.slug}`}
              aria-label={`Zobacz zabieg: ${treatment.title}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  className={styles.image}
                  src={getTreatmentImage(treatment.slug)}
                  alt={treatment.imageAlt}
                  width={720}
                  height={900}
                />
              </div>
            </Link>
            <div className={styles.copy}>
              {/* <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span> */}
              <h2>{treatment.title}</h2>
              <p>{treatment.shortDescription}</p>
              <div className={styles.meta}>
                <span>{treatment.price}</span>
                <Link
                  className={styles.link}
                  href={`/zabiegi/${treatment.slug}`}
                >
                  Zobacz zabieg <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
