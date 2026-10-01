import Link from "next/link";

import styles from "./breadcrumbs.module.css";

type BreadcrumbsProps = {
  currentPage: string;
};

export const Breadcrumbs = ({ currentPage }: BreadcrumbsProps) => (
  <nav className={styles.breadcrumbs} aria-label="Okruszki nawigacyjne">
    <ol className={styles.list}>
      <li>
        <Link href="/">Strona główna</Link>
      </li>
      <li>
        <span className={styles.separator} aria-hidden="true">
          /
        </span>
        <Link href="/zabiegi">Zabiegi</Link>
      </li>
      <li aria-current="page">
        <span className={styles.separator} aria-hidden="true">
          /
        </span>
        {currentPage}
      </li>
    </ol>
  </nav>
);