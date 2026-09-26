import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTAButton } from "@/components/cta-button";
import { FaqItem } from "@/components/faq-item";
import { PageShell } from "@/components/page-shell";
import { getTreatment, treatments } from "@/data/treatments";
import styles from "./treatment-detail.module.css";

type TreatmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  return {
    title: treatment
      ? `${treatment.title} | WW - ESTHE`
      : "Zabieg | WW - ESTHE",
    description: treatment?.shortDescription,
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <PageShell>
      <article>
        <section
          id="wprowadzenie"
          className={`${styles.hero} ${styles.anchorSection} section-shell`}
        >
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>{treatment.title}</h1>
            <h2 className={styles.heroSubtitle}>Dla kogo jest ten zabieg?</h2>
            {treatment.forWho.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <CTAButton />
          </div>
          <dl
            id="informacje"
            className={`${styles.heroFacts} ${styles.anchorSection}`}
            aria-label="Podstawowe informacje o zabiegu"
          >
            <div>
              <dt>Cena</dt>
              <dd>{treatment.price}</dd>
            </div>
            <div>
              <dt>Czas trwania</dt>
              <dd>{treatment.duration}</dd>
            </div>
          </dl>
        </section>

        <section
          id="opis-zabiegu"
          className={`${styles.content} ${styles.copyContent} ${styles.anchorSection} section-shell`}
        >
          <h2>Na czym polega zabieg?</h2>
          <div className={styles.copyColumn}>
            {treatment.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="przygotowanie-do-zabiegu"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell section-tinted`}
        >
          <div>
            <h2>Przygotowanie do zabiegu</h2>
            <ol className={`${styles.list} ${styles.orderedList}`}>
              {treatment.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="przeciwwskazania"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
        >
          <div>
            <h2>Przeciwwskazania</h2>
            <ul className={`${styles.list} ${styles.unorderedList}`}>
              {treatment.contraindications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="reakcje-pozabiegowe"
          className={`${styles.content} ${styles.copyContent} ${styles.anchorSection} section-shell section-tinted`}
        >
          <h2>Możliwe reakcje pozabiegowe</h2>
          <div className={styles.copyColumn}>
            {treatment.possibleReactions.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="zalecenia-pozabiegowe"
          className={`${styles.content} ${styles.listContent} ${styles.anchorSection} section-shell`}
        >
          <div>
            <h2>Zalecenia pozabiegowe</h2>
            <ul className={`${styles.list} ${styles.unorderedList}`}>
              {treatment.aftercare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="faq"
          className={`${styles.content} ${styles.faqSection} ${styles.anchorSection} section-shell section-tinted`}
          aria-labelledby="faq-title"
        >
          <div>
            <h2 id="faq-title">Najczęściej zadawane pytania</h2>
          </div>
          <div>
            {treatment.faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
