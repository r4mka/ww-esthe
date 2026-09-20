"use client";

import { useState, type PointerEvent } from "react";

import styles from "./process-section.module.css";
import { ProcessStep } from "./process-step";
import { ProcessTrack } from "./process-track";
import { steps } from "./steps";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);

  const moveToStep = (direction: "next" | "previous") => {
    setActiveStep((currentStep) => {
      if (direction === "next") {
        return currentStep === steps.length - 1 ? 0 : currentStep + 1;
      }

      return currentStep === 0 ? steps.length - 1 : currentStep - 1;
    });
  };

  const handlePointerCancel = () => {
    setSwipeStartX(null);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.isPrimary &&
      !(event.target instanceof Element && event.target.closest("button, a"))
    ) {
      setSwipeStartX(event.clientX);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || swipeStartX === null) {
      return;
    }

    const swipeDistance = event.clientX - swipeStartX;
    setSwipeStartX(null);
    event.currentTarget.releasePointerCapture(event.pointerId);

    if (Math.abs(swipeDistance) >= 50) {
      moveToStep(swipeDistance < 0 ? "next" : "previous");
    }
  };

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
          onPointerCancel={handlePointerCancel}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
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
