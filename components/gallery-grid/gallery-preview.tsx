import type { CSSProperties } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import styles from "./gallery-grid.module.css";
import { galleryItems } from "./gallery-items";
import { GalleryThumbnail } from "./gallery-thumbnail";

type GalleryPreviewProps = {
  className?: string;
  previewStart: number;
  onMove: (direction: "next" | "previous") => void;
  onOpenItem: (index: number) => void;
};

export function GalleryPreview({
  className,
  previewStart,
  onMove,
  onOpenItem,
}: GalleryPreviewProps) {
  const {
    didSwipe: didSwipeRef,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useSwipeGesture({ onSwipe: onMove });

  const handleOpen = (index: number) => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }

    onOpenItem(index);
  };

  return (
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
  );
}
