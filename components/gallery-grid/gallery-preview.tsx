"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./gallery-grid.module.css";
import { galleryItems } from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryPreviewProps = {
  className?: string;
  previewCount: number;
};

export function GalleryPreview({
  className,
  previewCount,
}: GalleryPreviewProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [previewStart, setPreviewStart] = useState(0);

  const movePreview = (direction: "next" | "previous") => {
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

  const {
    didSwipe: didSwipeRef,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useSwipeGesture({ onSwipe: movePreview });

  const handleOpen = (index: number) => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }

    setActiveIndex(index);
  };

  return (
    <>
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
          {galleryItems.map((item, index) => (
            <GalleryThumbnail
              item={item}
              key={item.src}
              onOpen={() => handleOpen(index)}
            />
          ))}
        </div>
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
