import Image from "next/image";

import Link from "next/link";
import { CTAButton } from "../cta-button";
import styles from "./hero-section.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.heroImage}>
        <Image
          className={styles.heroImageFile}
          src="/images/hero-extended.png"
          alt="Portret klientki WW-Esthe"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>

      <div className={styles.heroCopy}>
        <p className="eyebrow">Estetyka, która zaczyna się od Ciebie</p>
        <h1 id="hero-title">Naturalne piękno w dobrych rękach.</h1>
        <p>
          To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i
          doświadczeniu klientek.
        </p>

        <div className={styles.heroActions}>
          <CTAButton className={styles.heroButton}>Umów konsultację</CTAButton>
          <Link
            className={`${styles.heroSecondaryButton} button button-secondary`}
            href="/zabiegi"
          >
            Zobacz usługi
          </Link>
        </div>
      </div>
    </section>
  );
}
