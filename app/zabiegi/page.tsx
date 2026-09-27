import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { TreatmentList } from "@/components/treatment-list";

export default function TreatmentsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Oferta"
        title="Zabiegi"
        description="Poznaj zabiegi i wybierz rozwiązanie dopasowane do swoich potrzeb."
        image="/images/hero-treatments.jpg"
        imageAlt="Detal twarzy po profesjonalnym zabiegu estetycznym"
        mobilePosition="140px center"
        desktopPosition="54% center"
      />
      <section className="section-shell">
        <TreatmentList />
      </section>
    </PageShell>
  );
}
