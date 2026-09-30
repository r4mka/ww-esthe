"use client";

import { useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import { VisitStep } from "./visit-step";
import { visitSteps } from "./visit-steps";
import { VisitTrack } from "./visit-track";
import styles from "./visit.module.css";

export const Visit = () => {
  const [activeStep, setActiveStep] = useState(0);

  const moveToStep = (direction: "next" | "previous") => {
    setActiveStep((currentStep) => {
      if (direction === "next") {
        return currentStep === visitSteps.length - 1 ? 0 : currentStep + 1;
      }

      return currentStep === 0 ? visitSteps.length - 1 : currentStep - 1;
    });
  };

  const { onPointerDown, onPointerUp, onPointerCancel } = useSwipeGesture({
    onSwipe: moveToStep,
    capturePointer: true,
    ignoreInteractiveElements: true,
  });

  return (
    <div className={styles.visitTimeline}>
      <VisitTrack activeStep={activeStep} onSelectStep={setActiveStep} />
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
          {visitSteps.map((step) => (
            <VisitStep
              isLastStep={activeStep === visitSteps.length - 1}
              key={step.number}
              onNext={() => moveToStep("next")}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
