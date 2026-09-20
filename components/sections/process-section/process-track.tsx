import { steps } from "./steps";
import styles from "./process-section.module.css";

interface ProcessTrackProps {
  activeStep: number;
  onSelectStep: (stepIndex: number) => void;
}

export function ProcessTrack({
  activeStep,
  onSelectStep,
}: ProcessTrackProps) {
  return (
    <div className={styles.progressTrack}>
      <span
        className={styles.progressFill}
        aria-hidden="true"
        style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
      />
      <ol className={styles.progressSteps}>
        {steps.map((step, index) => (
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
}