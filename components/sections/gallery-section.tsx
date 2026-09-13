import styles from "./gallery-section.module.css";

export function GallerySection() {
  return (
    <section
      className="section-shell"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">Atmosfera</p>
          <h2 id="gallery-title">Moje prace</h2>
        </div>
        <p>Galeria zdjęć do uzupełnienia w kolejnym kroku.</p>
      </div>
      <div
        className={styles.galleryPlaceholder}
        aria-label="Miejsce na galerię zdjęć"
        role="img"
      >
        <span>Galeria zdjęć</span>
      </div>
    </section>
  );
}
