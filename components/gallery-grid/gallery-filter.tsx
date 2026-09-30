import styles from "./gallery-grid.module.css";
import {
  galleryCategories,
  type GalleryFilter as GalleryFilterValue,
} from "./gallery-items";

type GalleryFilterProps = {
  activeCategory: GalleryFilterValue;
  onCategoryChange: (category: GalleryFilterValue) => void;
};

export function GalleryFilter({
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className={styles.filters} role="group" aria-label="Kategorie galerii">
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
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
