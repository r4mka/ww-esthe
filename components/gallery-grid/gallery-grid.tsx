"use client";

import { useState } from "react";

import styles from "./gallery-grid.module.css";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";
import { GalleryViewer } from "./gallery-viewer";

type GalleryGridProps = {
  className?: string;
};

export function GalleryGrid({ className }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | GalleryCategory>(
    "all",
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: "all" | GalleryCategory) => {
    setActiveCategory(category);
    setActiveIndex(null);
  };

  return (
    <>
      <div
        className={styles.filters}
        role="group"
        aria-label="Kategorie galerii"
      >
        {galleryCategories.map((category) => (
          <button
            className={
              category.id === activeCategory
                ? `${styles.filter} ${styles.filterActive}`
                : styles.filter
            }
            type="button"
            aria-pressed={category.id === activeCategory}
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
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
