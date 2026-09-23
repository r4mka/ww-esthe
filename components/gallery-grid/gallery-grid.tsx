"use client";

import { useState } from "react";

import styles from "./gallery-grid.module.css";
import { galleryItems } from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryGridProps = {
  className?: string;
};

export function GalleryGrid({ className }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`${styles.grid} ${className ?? ""}`}>
        {galleryItems.map((item, index) => (
          <GalleryThumbnail
            item={item}
            key={item.src}
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryViewer
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
