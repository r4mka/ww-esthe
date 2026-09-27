import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { CTAButton } from "@/components/cta-button";

import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  mobilePosition?: string;
  desktopPosition?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  mobilePosition = "center center",
  desktopPosition = "center center",
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) => (
  <section className={styles.hero} aria-labelledby="page-hero-title">
    <div
      className={styles.imageWrap}
      style={
        {
          "--hero-mobile-position": mobilePosition,
          "--hero-desktop-position": desktopPosition,
          "--hero-image": `url("${image}")`,
        } as CSSProperties
      }
    >
      <div className={styles.imagePanel}>
        <Image
          className={styles.image}
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 40vw"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
    </div>

    <div className={styles.content}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 id="page-hero-title">{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.actions}>
        <CTAButton className={styles.primaryAction} />
        {secondaryHref && secondaryLabel && (
          <Link className={styles.secondaryAction} href={secondaryHref}>
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  </section>
);
