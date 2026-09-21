import Image from "next/image";

import styles from "./gallery-grid.module.css";
import type { GalleryItem } from "./gallery-items";

type GalleryThumbnailProps = {
  item: GalleryItem;
  onOpen: () => void;
};

export function GalleryThumbnail({ item, onOpen }: GalleryThumbnailProps) {
  return (
    <button
      className={styles.thumbnail}
      type="button"
      onClick={onOpen}
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
}
