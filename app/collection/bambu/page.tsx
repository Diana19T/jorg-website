import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CollectionSection } from "@/components/primitives/CollectionSection";
import { ImagePlaceholder } from "@/components/primitives/ImagePlaceholder";
import styles from "./page.module.css";

const IMG = "/images/collection/bambu";

export default function BambuCollectionPage() {
  return (
    <main className={styles.page}>
      <Header />

      {/* ---------- Hero (1:2010) ---------- */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Bambú</h1>
        <div className={styles.heroBannerWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/hero-banner.png`} alt="Bambú collection" className={styles.heroBanner} />
        </div>
      </div>

      {/* ---------- Intro + Explore Collections (1:2017) ---------- */}
      <div className={styles.intro}>
        <p className={styles.introText}>
          Our bracelets are designed to complement every movement with effortless elegance.
          Crafted in 18K gold and finished by hand, they balance refined simplicity with
          exceptional craftsmanship, making them timeless companions for every occasion.
        </p>
        <button type="button" className={styles.exploreButton}>
          Explore Collections
        </button>
      </div>

      {/* ---------- Two-up hero pair (1:1972 / 1:1973) ---------- */}
      <div className={styles.heroPairRow}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/hero-pair-1.png`} alt="Bambú collection detail" className={styles.heroPairImage} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/hero-pair-2.png`}
          alt="Bambú collection detail"
          className={`${styles.heroPairImage} ${styles.heroPairImageFlipped}`}
        />
      </div>

      <CollectionSection
        heading="Pastel  tweed  bracelet"
        headingColor="#1d1d1d"
        body="Our bracelets are designed to complement every movement with effortless elegance. Crafted in 18K gold and finished by hand, they balance refined simplicity with exceptional craftsmanship, making them timeless companions for every occasion."
        bodyColor="#1d1d1d"
        bodyWidth={540}
        buttonLabel="View details"
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/full-bleed-1.png`} alt="Bambú collection" className={styles.fullBleed} style={{ height: 859 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${IMG}/full-bleed-2.png`} alt="Bambú collection" className={styles.fullBleed} style={{ height: 855 }} />

      <CollectionSection
        heading="Earrings"
        headingColor="#131313"
        body="Every ring tells a personal story. From delicate bands to bold statement designs, each piece is handcrafted to celebrate individuality while reflecting the timeless character of JORG. Designed to illuminate every look, our earrings combine sculptural forms with understated elegance."
        bodyColor="#1d1d1d"
        bodyWidth={548}
      />

      {/* ---------- 4-up portrait gallery (1:1906) ---------- */}
      <div className={styles.gallery}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/gallery-1.png`} alt="Bambú collection, worn" className={styles.galleryImage} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/gallery-2.png`} alt="Bambú collection, worn" className={styles.galleryImage} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/gallery-3.png`} alt="Bambú collection, worn" className={styles.galleryImage} />
        <ImagePlaceholder className={styles.galleryImage} label="Bambú collection, worn (asset missing)" />
      </div>

      {/* ---------- Pagination (1:1942) ---------- */}
      <div className={styles.pagination}>
        <span data-current="true">1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <CollectionSection
        heading="Crafted to Be Worn for a Lifetime"
        headingColor="#131313"
        body="Each JORG creation is handcrafted using traditional techniques and precious materials. Designed with intention and made to endure, our jewelry becomes part of the moments that matter most. Minimal forms, precious materials, and enduring elegance for every occasion."
        bodyColor="#131313"
        bodyWidth={568}
        buttonLabel="View details"
      />

      {/* ---------- Closing image + JORG wordmark (1:2025 / 1:2027) ---------- */}
      <div className={styles.closing}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/footer-image.png`} alt="JORG Bambú collection" className={styles.closingImage} />
        <p className={styles.closingWordmark}>JORG</p>
      </div>

      <Footer />
    </main>
  );
}
