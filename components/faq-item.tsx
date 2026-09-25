import styles from "./faq-item.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className={styles.item}>
      <summary>{question}</summary>
      <p className={styles.answer}>{answer}</p>
    </details>
  );
}