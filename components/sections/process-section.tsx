const steps = [
  { number: "01", title: "Poznajemy potrzeby", text: "Rozmowa i konsultacja." },
  { number: "02", title: "Dobieramy plan", text: "Indywidualna rekomendacja." },
  { number: "03", title: "Działamy", text: "Spokojna wizyta i opieka." },
];

import styles from "./process-section.module.css";

export function ProcessSection() {
  return (
    <section
      className="section-shell section-tinted"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Nasze podejście</p>
        <h2 id="process-title">Jak pracuję?</h2>
      </div>
      <ol className={styles.processGrid}>
        {steps.map((step) => (
          <li className={styles.processStep} key={step.number}>
            <span className={styles.stepNumber}>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
