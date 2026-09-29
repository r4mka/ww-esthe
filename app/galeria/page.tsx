import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { PageShell } from "@/components/page-shell";

import styles from "./gallery.module.css";

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <header className={`section-heading ${styles.pageIntro}`}>
          <h1>Galeria prac</h1>
        </header>
        <GalleryGrid />
      </section>
    </PageShell>
  );
}
