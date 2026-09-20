import { ArrowRight, RotateCcw } from "lucide-react";

import styles from "./process-section.module.css";
import type { ProcessStep } from "./steps";

interface ProcessStepProps {
  isLastStep: boolean;
  onNext: () => void;
  step: ProcessStep;
}

export function ProcessStep({ isLastStep, onNext, step }: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <article className={styles.processSlide}>
      <div className={styles.processSlideContent}>
        <div className={styles.stepIcon} aria-hidden="true">
          <Icon size={22} strokeWidth={1.6} />
        </div>
        <p className={styles.stepSubtitle}>{step.subtitle}</p>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
      <div className={styles.processNavigation}>
        <button
          className={styles.nextStepButton}
          type="button"
          onClick={onNext}
        >
          {isLastStep ? "Wróć do początku" : "Kolejny krok"}
          {isLastStep ? (
            <RotateCcw size={18} strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" />
          )}
        </button>
      </div>
    </article>
  );
}
