import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import Link from "next/link";
import styles from "./gallery-section.module.css";

export function GallerySection() {
  return (
    <section
      className="section-shell"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Atmosfera</p>
          <h2 id="gallery-title">Moje prace</h2>
        </div>
        <p>Zobacz efekty zabiegów i poznaj estetykę WW-Esthe.</p>
      </div>
      <GalleryGrid className={styles.fullWidthGallery} previewCount={3} />
      <Link className="button button-secondary" href="/galeria">
        Zobacz całą galerię
      </Link>
    </section>
  );
}
