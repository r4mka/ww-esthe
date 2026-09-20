"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./gallery-grid.module.css";

const galleryItems = [
  {
    src: "/images/491432162_18015506234697649_5081887183424975070_n.jpg",
    alt: "Efekt stylizacji brwi",
    description:
      "Naturalnie podkreślone brwi dopasowane do rysów twarzy i codziennego stylu. Kształt został dobrany podczas konsultacji, a delikatne wykończenie podkreśla spojrzenie bez przerysowanego efektu.",
  },
  {
    src: "/images/622434240_17955542127060460_9214237449777035482_n.jpg",
    alt: "Efekt zabiegu estetycznego",
    description:
      "Delikatny efekt, który podkreśla urodę bez zmieniania naturalnych proporcji. Przed zabiegiem omówiliśmy oczekiwania i wybraliśmy rozwiązanie dopasowane do typu urody oraz codziennych potrzeb klientki.",
  },
  {
    src: "/images/650099679_18052926815697649_2857778446659390710_n.jpg",
    alt: "Detal wykonania zabiegu",
    description:
      "Precyzyjna praca i dbałość o każdy detal są podstawą każdego zabiegu.",
  },
  {
    src: "/images/702902875_18062186222697649_8449637741904313717_n.jpg",
    alt: "Rezultat stylizacji",
    description:
      "Subtelne podkreślenie, które pozostaje spójne z typem urody klientki.",
  },
  {
    src: "/images/798316773_18078078236697649_7996895775579899406_n.jpg",
    alt: "Zdjęcie efektu zabiegu",
    description:
      "Każdy efekt planujemy indywidualnie podczas konsultacji przed zabiegiem.",
  },
  {
    src: "/images/IMG_5966.PNG",
    alt: "Praca z zakresu kosmetologii",
    description:
      "Pielęgnacja dobrana do potrzeb skóry pomaga utrzymać świeży i zdrowy wygląd. Zabieg poprzedza analiza kondycji skóry, dzięki której można dobrać odpowiednie składniki aktywne i zalecenia do domowej pielęgnacji.",
  },
  {
    src: "/images/IMG_5968.PNG",
    alt: "Efekt pielęgnacji skóry",
    description:
      "Regularna pielęgnacja i odpowiednio dobrane zabiegi wspierają kondycję skóry.",
  },
  {
    src: "/images/IMG_5989.PNG",
    alt: "Rezultat zabiegu kosmetologicznego",
    description:
      "Komfort i bezpieczeństwo klientki są ważną częścią całego doświadczenia.",
  },
  {
    src: "/images/brwi%20perm/IMG_2057.jpg",
    alt: "Stylizacja brwi",
    description:
      "Stylizacja brwi nadaje spojrzeniu wyrazistość i zachowuje naturalny charakter. Włoski zostały ułożone w kierunku, który optycznie otwiera oko, a efekt pozostaje lekki i łatwy do utrzymania na co dzień.",
  },
  {
    src: "/images/brwi%20perm/IMG_2127.JPG",
    alt: "Brwi po zabiegu",
    description:
      "Kształt brwi został dopasowany do twarzy, aby efekt był lekki i harmonijny.",
  },
  {
    src: "/images/brwi%20perm/IMG_2129.JPG",
    alt: "Efekt laminacji brwi",
    description:
      "Laminacja pomaga ujarzmić włoski i nadać im uporządkowany, pełniejszy wygląd.",
  },
  {
    src: "/images/brwi%20perm/IMG_2968.jpg",
    alt: "Naturalny efekt brwi",
    description:
      "Rezultat dopasowany do oczekiwań klientki i jej naturalnej oprawy oka.",
  },
  {
    src: "/images/brwi%20perm/IMG_3517.JPG",
    alt: "Detal stylizacji brwi",
    description:
      "Precyzyjny kształt i delikatne wykończenie tworzą elegancki efekt.",
  },
  {
    src: "/images/lips/IMG_6553.JPG",
    alt: "Stylizacja ust",
    description:
      "Delikatne podkreślenie ust, które zachowuje ich miękki i naturalny wygląd.",
  },
  {
    src: "/images/lips/IMG_7998.jpg",
    alt: "Efekt zabiegu ust",
    description:
      "Kształt i intensywność efektu zawsze omawiamy przed rozpoczęciem zabiegu.",
  },
  {
    src: "/images/lips/IMG_8490.JPG",
    alt: "Naturalny efekt ust",
    description: "Efekt końcowy jest świeży i proporcjonalny do całej twarzy.",
  },
  {
    src: "/images/lips/IMG_8732.PNG",
    alt: "Rezultat zabiegu estetycznego ust",
    description:
      "Odpowiednio dobrana technika pozwala uzyskać subtelne, estetyczne podkreślenie.",
  },
  {
    src: "/images/lips/IMG_8743.JPG",
    alt: "Efekt pigmentacji ust",
    description:
      "Pigmentacja wyrównuje kolor ust i dodaje im delikatnego, zdrowego wyglądu.",
  },
];

type GalleryGridProps = {
  className?: string;
  previewCount?: number;
};

export function GalleryGrid({ className, previewCount }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [previewStart, setPreviewStart] = useState(0);
  const viewerScrollRef = useRef<HTMLDivElement>(null);

  const movePreview = (direction: "next" | "previous") => {
    if (previewCount === undefined) {
      return;
    }

    setPreviewStart((currentStart) => {
      const lastStart = Math.max(galleryItems.length - previewCount, 0);
      const nextStart =
        direction === "next"
          ? currentStart + previewCount
          : currentStart - previewCount;

      if (nextStart > lastStart) {
        return 0;
      }

      if (nextStart < 0) {
        return lastStart;
      }

      return nextStart;
    });
  };

  const { didSwipe, onPointerDown, onPointerUp, onPointerCancel } =
    useSwipeGesture({ onSwipe: movePreview });

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const activeItem = viewerScrollRef.current?.children[activeIndex];
    if (activeItem instanceof HTMLElement) {
      activeItem.scrollIntoView({ block: "start" });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderThumbnail = (
    item: (typeof galleryItems)[number],
    index: number,
  ) => (
    <button
      className={styles.thumbnail}
      key={item.src}
      type="button"
      onClick={() => {
        if (didSwipe.current) {
          didSwipe.current = false;
          return;
        }

        setActiveIndex(index);
        setExpandedIndex(null);
      }}
      aria-label={`Otwórz zdjęcie: ${item.alt}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={400}
        height={400}
        sizes="(max-width: 639px) 33vw, 25vw"
      />
    </button>
  );

  return (
    <>
      {previewCount === undefined ? (
        <div className={`${styles.grid} ${className ?? ""}`}>
          {galleryItems.map(renderThumbnail)}
        </div>
      ) : (
        <div
          className={`${styles.previewViewport} ${className ?? ""}`}
          onPointerCancel={onPointerCancel}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            className={styles.previewTrack}
            style={
              {
                "--preview-item-count": galleryItems.length,
                transform: `translateX(-${(previewStart / galleryItems.length) * 100}%)`,
              } as CSSProperties
            }
          >
            {galleryItems.map(renderThumbnail)}
          </div>
        </div>
      )}

      {activeIndex !== null && (
        <div
          className={styles.viewer}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria zdjęć"
        >
          <button
            className={styles.closeButton}
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Zamknij galerię"
          >
            ×
          </button>
          <div className={styles.viewerScroll} ref={viewerScrollRef}>
            {galleryItems.map((item, index) => (
              <article className={styles.viewerItem} key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={1200}
                  sizes="100vw"
                />
                <div className={styles.description}>
                  <p className={expandedIndex === index ? styles.expanded : ""}>
                    {item.description}
                  </p>
                  <button
                    className={styles.readMore}
                    type="button"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                  >
                    {expandedIndex === index ? "Pokaż mniej" : "Czytaj więcej"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
