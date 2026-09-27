import { siteConfig } from "@/data/site-config";

import { HeroPage } from "../hero-page";

export function HeroSection() {
  return (
    <HeroPage
      eyebrow="Estetyka, która zaczyna się od Ciebie"
      title="Naturalne piękno w dobrych rękach."
      description="To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i doświadczeniu klientek."
      image="/images/heros/hero-1.JPG"
      imageAlt="Portret klientki WW-Esthe"
      cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
      secondaryCta={{ label: "Zobacz usługi", href: "/zabiegi" }}
    />
  );
}
