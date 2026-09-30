import { HeroPage } from "@/components/hero-page";
import { FaqSection } from "@/components/sections/faq-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ProcessSection } from "@/components/sections/process-section/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HeroPage
          eyebrow="Estetyka, która zaczyna się od Ciebie"
          title="Naturalne piękno w dobrych rękach."
          description="To miejsce na krótkie, wprowadzające zdanie o podejściu salonu i doświadczeniu klientek."
          image="/images/hero-mobile/hero-home.jpg"
          desktopImage="/images/hero-about.jpg"
          imageAlt="Portret klientki WW-Esthe"
          cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
          secondaryCta={{ label: "Zobacz usługi", href: "/zabiegi" }}
        />
        <TreatmentsSection />
        <ProcessSection />
        <GallerySection />
        <FaqSection id="homepage-faq" />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
