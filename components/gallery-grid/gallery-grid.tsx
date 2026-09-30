"use client";

import { useState } from "react";

import { GalleryFilter } from "./gallery-filter";
import styles from "./gallery-grid.module.css";
import {
  galleryItems,
  type GalleryFilter as GalleryFilterValue,
} from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryGridProps = {
  className?: string;
  initialCategory?: GalleryFilterValue;
};

export function GalleryGrid({
  className,
  initialCategory = "all",
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilterValue>(initialCategory);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: GalleryFilterValue) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <>
      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className={`${styles.grid} ${className ?? ""}`}>
        {visibleItems.map((item, index) => (
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
          items={visibleItems}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
