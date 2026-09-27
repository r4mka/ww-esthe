import { siteConfig } from "@/data/site-config";

import { HeroPage } from "../hero-page";

export function HeroSection() {
  return (
    <HeroPage
      eyebrow="Estetyka, która zaczyna się od Ciebie"
      title="Naturalne piękno w dobrych rękach."
      description="To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i doświadczeniu klientek."
      image="/images/heros/hero-1.JPG"
      desktopImage="/images/hero-home.jpg"
      imageAlt="Portret klientki WW-Esthe"
      cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
      secondaryCta={{ label: "Zobacz usługi", href: "/zabiegi" }}
      desktopPosition="calc(100% - max(2rem, calc((100vw - 1180px) / 2 + 2rem))) center"
    />
  );
}