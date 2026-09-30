import { visitSteps } from "./visit-steps";
import styles from "./visit.module.css";

interface VisitTrackProps {
  activeStep: number;
  onSelectStep: (stepIndex: number) => void;
}

export const VisitTrack = ({ activeStep, onSelectStep }: VisitTrackProps) => (
  <div className={styles.progressTrack}>
    <span
      className={styles.progressFill}
      aria-hidden="true"
      style={{ width: `${(activeStep / (visitSteps.length - 1)) * 100}%` }}
    />
    <ol className={styles.progressSteps}>
      {visitSteps.map((step, index) => (
        <li key={step.number}>
          <button
            className={`${styles.progressPoint} ${
              index <= activeStep ? styles.completed : ""
            }`}
            type="button"
            aria-label={`Przejdź do kroku ${step.number}: ${step.title}`}
            aria-current={index === activeStep ? "step" : undefined}
            onClick={() => onSelectStep(index)}
          >
            {index < activeStep ? "✓" : step.number}
          </button>
        </li>
      ))}
    </ol>
  </div>
);
