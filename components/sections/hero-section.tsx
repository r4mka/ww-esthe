import Image from "next/image";

import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section
      className={`${styles.heroSection} section-shell`}
      aria-labelledby="hero-title"
    >
      <div className={styles.heroCopy}>
        <p className="eyebrow">Estetyka, która zaczyna się od Ciebie</p>
        <h1 id="hero-title">Naturalne piękno w dobrych rękach.</h1>
        <p>
          To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i
          doświadczeniu klientek.
        </p>
        <a className="button" href="#contact">
          Umów konsultację
        </a>
      </div>
      <div className={styles.heroImage}>
        <Image
          className={styles.heroImageFile}
          src="/images/622434240_17955542127060460_9214237449777035482_n.jpg"
          alt="Portret klientki WW-Esthe"
          width={1080}
          height={1350}
          priority
        />
      </div>
    </section>
  );
}
