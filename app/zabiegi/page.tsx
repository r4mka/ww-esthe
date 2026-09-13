import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { TreatmentList } from "@/components/treatment-list";

export default function TreatmentsPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <PageIntro
          eyebrow="Oferta"
          title="Zabiegi"
          description="Poznaj zabiegi i wybierz rozwiązanie dopasowane do swoich potrzeb."
        />
        <TreatmentList />
      </section>
    </PageShell>
  );
}
