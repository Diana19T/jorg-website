import styles from "./ImageGallery.module.css";

export type GalleryImage = {
  src: string;
  alt: string;
  background: string; // Figma sets a distinct placeholder bg per image slot
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

/**
 * Vertically stacked full-bleed gallery, matching Figma node 1:2092 (Frame 60).
 * Each image sits in a 976px-tall clipped container; the source photo is taller
 * than its container and anchored via object-fit, exactly as Figma's own
 * oversized image + overflow-clip pattern does.
 */
export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((image, i) => (
        <div key={image.src} className={styles.slide} style={{ background: image.background }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} className={styles.image} />
          {i === 0 && <div className={styles.scrollPill} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
