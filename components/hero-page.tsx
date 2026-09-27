import Image from "next/image";
import Link from "next/link";

import { CTAButton } from "./cta-button";

import styles from "./hero-page.module.css";

interface HeroLink {
  label: string;
  href: string;
}

interface HeroPageProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  cta?: HeroLink;
  secondaryCta?: HeroLink;
}

export const HeroPage = ({
  id = "hero",
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cta,
  secondaryCta,
}: HeroPageProps) => {
  const titleId = `${id}-title`;

  return (
    <section id={id} className={styles.heroSection} aria-labelledby={titleId}>
      <div className={styles.heroBackground} aria-hidden="true" />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h1 id={titleId}>{title}</h1>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}

          {cta || secondaryCta ? (
            <div className={styles.heroActions}>
              {cta ? <CTAButton href={cta.href}>{cta.label}</CTAButton> : null}
              {secondaryCta ? (
                <Link
                  className="button button-secondary"
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={styles.heroVisual}>
          <Image
            className={styles.heroImage}
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="(max-width: 767px) 100vw, (max-width: 1180px) 50vw, 570px"
          />
        </div>
      </div>
    </section>
  );
};
