import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./gallery-grid.module.css";
import { galleryItems } from "./gallery-items";

type GalleryViewerProps = {
  activeIndex: number;
  onClose: () => void;
};

export function GalleryViewer({ activeIndex, onClose }: GalleryViewerProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const viewerScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const activeItem = viewerScrollRef.current?.children[activeIndex];
    if (activeItem instanceof HTMLElement) {
      activeItem.scrollIntoView({ block: "start" });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.viewer}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria zdjęć"
    >
      <button
        className={styles.closeButton}
        type="button"
        onClick={onClose}
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
  );
}
