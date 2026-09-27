import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Poznajmy się"
        title="O mnie"
        description="Wierzę, że najlepsze efekty zaczynają się od uważnej rozmowy, zaufania i podkreślania naturalnego piękna."
        image="/images/hero-about.jpg"
        imageAlt="Kobieta w naturalnym makijażu"
        mobilePosition="155px center"
        desktopPosition="42% center"
        secondaryHref="/kontakt"
        secondaryLabel="Skontaktuj się"
      />
      <section className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Moje podejście</p>
          <h2>Piękno dopasowane do Ciebie.</h2>
          <p>
            Każdą wizytę zaczynam od poznania Twoich oczekiwań. Dzięki temu
            możemy wybrać zabieg, który pasuje do Twojego stylu życia i daje
            efekt, w którym czujesz się sobą.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
