import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { HeroPage } from "@/components/hero-page";
import { PageShell } from "@/components/page-shell";

export default function GalleryPage() {
  return (
    <PageShell>
      <HeroPage
        eyebrow="Prace WW-Esthe"
        title="Piękno, które wygląda jak Ty."
        description="Zobacz moje prace i zainspiruj się nowymi pomysłami."
        image="/images/heros/hero-4.JPG"
  desktopImage="/images/hero-gallery.jpg"
        imageAlt="Portret klientki prezentujący naturalny efekt pracy WW-Esthe"
        desktopPosition="50% center"
      />
      <section className="section-shell">
        <GalleryGrid />
      </section>
    </PageShell>
  );
}
