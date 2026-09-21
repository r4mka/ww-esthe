import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <PageIntro
          title="Galeria"
          description="Zobacz moje prace i zainspiruj się nowymi pomysłami."
        />
        <GalleryGrid />
      </section>
    </PageShell>
  );
}
