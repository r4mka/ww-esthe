"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./testimonials-section.module.css";

const testimonials = [
  {
    quote:
      "Od dawna szukałam miejsca, w którym ktoś naprawdę słucha potrzeb klientki. Jestem bardzo zadowolona z efektu.",
    author: "Weronika",
  },
  {
    quote:
      "Zabieg był wykonany niezwykle starannie, a atmosfera podczas wizyty bardzo przyjemna i spokojna.",
    author: "Marta",
  },
  {
    quote:
      "Efekt jest subtelny i naturalny, dokładnie taki, na jakim mi zależało. Otrzymałam też świetne wskazówki dotyczące pielęgnacji.",
    author: "Paulina",
  },
  {
    quote:
      "To była moja pierwsza wizyta i od razu poczułam, że jestem w dobrych rękach. Na pewno będę wracać.",
    author: "Katarzyna",
  },
  {
    quote:
      "Profesjonalna konsultacja, delikatne wykonanie i piękny rezultat. Wizyta spełniła wszystkie moje oczekiwania.",
    author: "Monika",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className={`${styles.testimonialSection} section-shell`}
      aria-labelledby="testimonials-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Opinie</p>
        <h2 id="testimonials-title">Co mówią klientki</h2>
      </div>
      <TestimonialCarousel />
    </section>
  );
}

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const moveTo = (direction: "next" | "previous") => {
    setActiveIndex((currentIndex) => {
      if (direction === "next") {
        return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
      }

      return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    });
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
        className={styles.carouselViewport}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {testimonials.map((testimonial, index) => (
            <blockquote
              className={styles.carouselSlide}
              key={testimonial.quote}
              aria-hidden={index !== activeIndex}
            >
              <p>“{testimonial.quote}”</p>
              <cite>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
      <div className={styles.carouselControls} aria-label="Nawigacja opinii">
        <button
          type="button"
          aria-label="Poprzednia opinia"
          onClick={() => moveTo("previous")}
        >
          <ChevronLeft />
        </button>
        <span aria-label={`Opinia ${activeIndex + 1} z ${testimonials.length}`}>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          aria-label="Następna opinia"
          onClick={() => moveTo("next")}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
