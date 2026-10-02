"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, type ReactNode, useEffect, useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./carousel.module.css";

type CarouselProps = {
  children: ReactNode;
  ariaLabel: string;
  autoPlayInterval?: number;
};

export function Carousel({
  children,
  ariaLabel,
  autoPlayInterval,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const slideCount = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = slideCount > 0 ? activeIndex % slideCount : 0;

  useEffect(() => {
    if (!autoPlayInterval || isPaused || slideCount < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount);
    }, autoPlayInterval);

    return () => window.clearInterval(interval);
  }, [autoPlayInterval, isPaused, slideCount]);

  const moveTo = (direction: "next" | "previous") => {
    if (slideCount < 2) {
      return;
    }

    setActiveIndex((index) =>
      direction === "next"
        ? (index + 1) % slideCount
        : (index - 1 + slideCount) % slideCount,
    );
  };

  const { onPointerDown, onPointerUp, onPointerCancel } = useSwipeGesture({
    onSwipe: moveTo,
    capturePointer: true,
    onSwipeStart: () => setIsPaused(true),
    onSwipeEnd: () => setIsPaused(false),
  });

  return (
    <div
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className={styles.viewport}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              className={styles.slide}
              key={index}
              aria-hidden={index !== currentIndex}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      {slideCount > 1 && (
        <div className={styles.controls} role="group" aria-label={ariaLabel}>
          <button
            type="button"
            aria-label="Poprzedni slajd"
            onClick={() => moveTo("previous")}
          >
            <ChevronLeft />
          </button>
          <span aria-hidden="true">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(slideCount).padStart(2, "0")}
          </span>
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            Opinia {currentIndex + 1} z {slideCount}
          </span>
          <button
            type="button"
            aria-label="Następny slajd"
            onClick={() => moveTo("next")}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
