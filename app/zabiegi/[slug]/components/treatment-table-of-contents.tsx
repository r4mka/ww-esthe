import { List } from "lucide-react";

import styles from "./treatment-table-of-contents.module.css";

type TreatmentTableOfContentsProps = {
  hasBeforeAfter: boolean;
};

export const TreatmentTableOfContents = ({
  hasBeforeAfter,
}: TreatmentTableOfContentsProps) => {
  const items = [
    { href: "#opis-zabiegu", label: "Opis zabiegu" },
    { href: "#przygotowanie-do-zabiegu", label: "Przygotowanie" },
    ...(hasBeforeAfter ? [{ href: "#przed-i-po", label: "Przed i po" }] : []),
    { href: "#przeciwwskazania", label: "Przeciwwskazania" },
    { href: "#reakcje-pozabiegowe", label: "Możliwe reakcje" },
    { href: "#zalecenia-pozabiegowe", label: "Zalecenia" },
    { href: "#faq", label: "Najczęstsze pytania" },
  ];

  return (
    <nav
      className={`${styles.tableOfContents} section-shell`}
      aria-labelledby="treatment-toc-title"
    >
      <div className={styles.content}>
        <h2 className={styles.title} id="treatment-toc-title">
          <List aria-hidden="true" size={15} />
          Spis treści
        </h2>
        <ol className={styles.list}>
          {items.map(({ href, label }, index) => (
            <li key={href}>
              <a href={href}>
                <span>{label}</span>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
