"use client";

import { useState } from "react";

import styles from "./gallery-grid.module.css";
import { galleryItems } from "./gallery-items";
import { GalleryPreview } from "./gallery-preview";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryGridProps = {
  className?: string;
  previewCount?: number;
};

export function GalleryGrid({ className, previewCount }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [previewStart, setPreviewStart] = useState(0);

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

  return (
    <>
      {previewCount === undefined ? (
        <div className={`${styles.grid} ${className ?? ""}`}>
          {galleryItems.map((item, index) => (
            <GalleryThumbnail
              item={item}
              key={item.src}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : (
        <GalleryPreview
          className={className}
          onMove={movePreview}
          onOpenItem={setActiveIndex}
          previewStart={previewStart}
        />
      )}

      {activeIndex !== null && (
        <GalleryViewer
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
