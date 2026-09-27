import { PageHero } from "@/components/page-hero";

export function HeroSection() {
  return (
    <PageHero
      eyebrow="Estetyka, która zaczyna się od Ciebie"
      title="Naturalne piękno w dobrych rękach."
      description="Indywidualnie dobrane zabiegi estetyczne i spokojna atmosfera, w której możesz poczuć się naprawdę zaopiekowana."
      image="/images/hero-home.jpg"
      imageAlt="Kobieta prezentująca naturalny makijaż"
      mobilePosition="center"
      desktopPosition="calc(100% - max(2rem, calc((100vw - 1180px) / 2 + 2rem))) center"
      secondaryHref="/zabiegi"
      secondaryLabel="Zobacz usługi"
    />
  );
}
