import { FaqSection } from "@/components/sections/faq-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TreatmentsSection } from "@/components/sections/treatments-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <ProcessSection />
        <GallerySection />
        <FaqSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
