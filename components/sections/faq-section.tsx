const questions = [
  "Jak przygotować się do wizyty?",
  "Ile trwa konsultacja?",
  "Jak wybrać właściwy zabieg?",
];

import styles from "./faq-section.module.css";

export function FaqSection() {
  return (
    <section
      className="section-shell section-tinted"
      aria-labelledby="faq-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Informacje</p>
        <h2 id="faq-title">Everything You&apos;ve Ever Wanted to Ask</h2>
      </div>
      <div className={styles.faqList}>
        {questions.map((question) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>
              Przykładowa odpowiedź, którą później zastąpimy właściwą treścią.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
