import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        title="Galeria"
        description="Zobacz moje prace i zainspiruj się nowymi pomysłami."
        image="/images/hero-gallery.jpg"
        imageAlt="Portret kobiety w naturalnym makijażu"
        mobilePosition="0 center"
        desktopPosition="50% center"
      />
      <section className="section-shell">
        <GalleryGrid />
      </section>
    </PageShell>
  );
}
