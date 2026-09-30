"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import { GalleryFilter } from "./gallery-filter";
import styles from "./gallery-grid.module.css";
import {
  galleryItems,
  type GalleryFilter as GalleryFilterValue,
} from "./gallery-items";
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
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilterValue>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [previewStart, setPreviewStart] = useState(0);
  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const movePreview = (direction: "next" | "previous") => {
    setPreviewStart((currentStart) => {
      const lastStart = Math.max(visibleItems.length - previewCount, 0);
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

  const handleCategoryChange = (category: GalleryFilterValue) => {
    setActiveCategory(category);
    setActiveIndex(null);
    setPreviewStart(0);
  };

  return (
    <>
      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
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
              "--preview-item-count": visibleItems.length,
              transform: `translateX(-${(previewStart / visibleItems.length) * 100}%)`,
            } as CSSProperties
          }
        >
          {visibleItems.map((item, index) => (
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
          items={visibleItems}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
