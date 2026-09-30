import { FaqItem } from "@/components/faq-item";
import { PageSection } from "@/components/page-section";

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

type FaqSectionProps = {
  className?: string;
  id: string;
  eyebrow?: string;
  title?: string;
  faqs?: readonly { question: string; answer: string }[];
};

export function FaqSection({
  className = "",
  id,
  eyebrow,
  title = "Wszystko o co chciałabyś zapytać",
  faqs = homeFaqs,
}: FaqSectionProps) {
  return (
    <PageSection
      className={`section-tinted faq-section ${className}`}
      id={id}
      eyebrow={eyebrow}
      title={title}
    >
      <div>
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </PageSection>
  );
}
