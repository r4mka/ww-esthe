"use client";

import { useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./process-section.module.css";
import { ProcessStep } from "./process-step";
import { ProcessTrack } from "./process-track";
import { steps } from "./steps";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const moveToStep = (direction: "next" | "previous") => {
    setActiveStep((currentStep) => {
      if (direction === "next") {
        return currentStep === steps.length - 1 ? 0 : currentStep + 1;
      }

      return currentStep === 0 ? steps.length - 1 : currentStep - 1;
    });
  };

  const { onPointerDown, onPointerUp, onPointerCancel } = useSwipeGesture({
    onSwipe: moveToStep,
    capturePointer: true,
    ignoreInteractiveElements: true,
  });

  return (
    <section
      className="section-shell section-tinted"
      id="process"
      aria-labelledby="process-title"
    >
      <div className={styles.processIntro}>
        <div className="section-heading">
          <p className="eyebrow">Nasze podejście</p>
          <h2 id="process-title">Twoja wizyta krok po kroku</h2>
        </div>
      </div>
      <div className={styles.processTimeline}>
        <ProcessTrack activeStep={activeStep} onSelectStep={setActiveStep} />
        <div
          className={styles.carouselViewport}
          onPointerCancel={onPointerCancel}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${activeStep * 100}%)` }}
            aria-live="polite"
          >
            {steps.map((step) => (
              <ProcessStep
                isLastStep={activeStep === steps.length - 1}
                key={step.number}
                onNext={() => moveToStep("next")}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
