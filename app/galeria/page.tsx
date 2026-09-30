import { GalleryGrid } from "@/components/gallery-grid/gallery-grid";
import {
  isGalleryFilter,
  type GalleryFilter,
} from "@/components/gallery-grid/gallery-items";

import styles from "./gallery.module.css";

type GalleryPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

const getInitialCategory = (
  category: string | string[] | undefined,
): GalleryFilter => {
  const value = Array.isArray(category) ? category[0] : category;

  return value && isGalleryFilter(value) ? value : "all";
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const { category } = await searchParams;
  const initialCategory = getInitialCategory(category);

  return (
    <section className="section-shell">
      <header className={`section-heading ${styles.pageIntro}`}>
        <h1>Galeria prac</h1>
      </header>
      <GalleryGrid initialCategory={initialCategory} />
    </section>
  );
}
