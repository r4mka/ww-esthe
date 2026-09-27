import { HeroPage } from "@/components/hero-page";
import { PageShell } from "@/components/page-shell";
import { TreatmentList } from "@/components/treatment-list";
import { siteConfig } from "@/data/site-config";

export default function TreatmentsPage() {
  return (
    <PageShell>
      <HeroPage
        eyebrow="Oferta"
        title="Zabiegi stworzone z myślą o Tobie."
        description="Poznaj zabiegi i wybierz rozwiązanie dopasowane do swoich potrzeb."
        image="/images/heros/hero-2.jpg"
        imageAlt="Portret klientki związany z naturalną estetyką zabiegów"
        cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
      />
      <section className="section-shell">
        <TreatmentList />
      </section>
    </PageShell>
  );
}
