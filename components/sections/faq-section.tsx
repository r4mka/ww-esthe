import { FaqItem } from "@/components/faq-item";

const homeFaqs = [
  {
    question: "Jak przygotować się do wizyty?",
    answer: "Przykładowa odpowiedź, którą później zastąpimy właściwą treścią.",
  },
  {
    question: "Ile trwa konsultacja?",
    answer: "Przykładowa odpowiedź, którą później zastąpimy właściwą treścią.",
  },
  {
    question: "Jak wybrać właściwy zabieg?",
    answer: "Przykładowa odpowiedź, którą później zastąpimy właściwą treścią.",
  },
];

export function FaqSection() {
  return (
    <section
      className="section-shell section-tinted faq-section"
      aria-labelledby="faq-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Informacje</p>
        <h2 id="faq-title">Wszystko o co chciałabyś zapytać</h2>
      </div>
      <div>
        {homeFaqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}
