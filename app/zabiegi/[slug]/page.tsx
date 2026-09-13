import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { getTreatment, getTreatmentImage, treatments } from "@/data/treatments";
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
        <section className="section-shell">
          <PageIntro
            eyebrow="Zabieg"
            title={treatment.title}
            description={treatment.shortDescription}
          />
          <div className={styles.heroImage}>
            <Image
              className={styles.heroImageFile}
              src={getTreatmentImage(treatment.slug)}
              alt={treatment.imageAlt}
              width={1200}
              height={900}
              priority
            />
          </div>
        </section>

        <section
          className="section-shell section-tinted"
          aria-label="Najważniejsze informacje"
        >
          <dl className={styles.facts}>
            <div>
              <dt>Czas trwania</dt>
              <dd>{treatment.duration}</dd>
            </div>
            <div>
              <dt>Cena</dt>
              <dd>{treatment.price}</dd>
            </div>
          </dl>
        </section>

        <section className={`${styles.content} section-shell`}>
          <div>
            <h2>Dla kogo jest zabieg?</h2>
            <p>{treatment.forWho}</p>
          </div>
          <div>
            <h2>Na czym polega zabieg?</h2>
            <p>{treatment.description}</p>
          </div>
          <div>
            <h2>Przygotowanie do zabiegu</h2>
            <ul>
              {treatment.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Przeciwwskazania</h2>
            <ul>
              {treatment.contraindications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Zalecenia po zabiegu</h2>
            <ul>
              {treatment.aftercare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section-shell section-tinted"
          aria-labelledby="faq-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Pytania</p>
            <h2 id="faq-title">Najczęściej zadawane pytania</h2>
          </div>
          <div className={styles.faqList}>
            {treatment.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
