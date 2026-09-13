import styles from "./testimonials-section.module.css";

export function TestimonialsSection() {
  return (
    <section
      className={`${styles.testimonialSection} section-shell`}
      aria-labelledby="testimonials-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Opinie</p>
        <h2 id="testimonials-title">Co mówią klientki</h2>
      </div>
      <blockquote>
        <p>“Tutaj pojawi się krótka opinia klientki.”</p>
        <cite>Imię klientki</cite>
      </blockquote>
      <div className={styles.carouselControls} aria-label="Nawigacja opinii">
        <button type="button" aria-label="Poprzednia opinia">
          ←
        </button>
        <span>01 / 03</span>
        <button type="button" aria-label="Następna opinia">
          →
        </button>
      </div>
    </section>
  );
}
