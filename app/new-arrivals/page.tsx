import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHero } from "@/components/primitives/PageHero";
import { FilterBar } from "@/components/primitives/FilterBar";
import { ProductGrid } from "@/components/primitives/ProductGrid";
import type { Product } from "@/components/primitives/ProductCard";
import styles from "./page.module.css";

const IMG = "/images/new-arrivals";

// Products transcribed in on-page order from Figma (Row 1: top 825, Row 2: top 2281, Row 3: top 2907).
const rowOne: Product[] = [
  { name: "Aurora Diamond Ring", price: "$2,780", imageSrc: `${IMG}/product-1.png` },
  { name: "Étoile Solitaire Ring", price: "$2,150", imageSrc: `${IMG}/product-2.png` },
  { name: "Luna Pavé Ring", price: "$3,780", imageSrc: `${IMG}/product-3.png` },
  { name: "Celeste Diamond Ring", price: "$2,860", imageSrc: `${IMG}/product-4.png` },
];

const rowTwo: Product[] = [
  { name: "Infinity Gold Ring", price: "$3,650", imageSrc: `${IMG}/product-5.png` },
  { name: "Signature Halo Ring", price: "$2,650", imageSrc: `${IMG}/product-6.png` },
  { name: "Essence Diamond Band", price: "$2,150", imageSrc: `${IMG}/product-7.png` },
  { name: "Nova White Gold Ring", price: "$3,180", imageSrc: `${IMG}/product-8.png` },
];

const rowThree: Product[] = [
  { name: "Aurora Rose Gold Ring", price: "$2,450", imageSrc: `${IMG}/product-9.png` },
  { name: "Blossom Ring", price: "$4,900", imageSrc: `${IMG}/product-10.png` },
  { name: "Harmony Ring", price: "$3,780", imageSrc: `${IMG}/product-11.png` },
  { name: "Rosé Diamond Band", price: "$2,780", imageSrc: `${IMG}/product-12.png` },
];

export default function NewArrivalsPage() {
  return (
    <main className={styles.page}>
      <Header />

      <PageHero
        eyebrow="Exquisite jewelry"
        title="New Arrivals"
        titleWidth={243}
        imageSrc={`${IMG}/hero.png`}
        imageAlt="New Arrivals"
      />

      <p className={styles.intro}>
        Every new piece reflects our dedication to exceptional craftsmanship and refined design.
        Created in 18K gold and finished by hand, each design celebrates individuality with
        understated elegance.
      </p>

      {/* No filter chips on this page per Figma — count + sort button only */}
      <FilterBar productCount={32} buttonLetterSpacing={0.84} />

      <div className={styles.gridSection}>
        <ProductGrid products={rowOne} infoHeight={96} priceFontSize={12} />
      </div>

      {/* ---------- Editorial banner (1:1887) ---------- */}
      <div className={styles.banner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/banner-left.png`} alt="" className={styles.bannerImageLeft} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/banner-right.png`} alt="" className={styles.bannerImageRight} />
        <div className={styles.bannerText}>
          <p className={styles.bannerParagraph}>
            Each collection begins with a simple idea — to create jewelry that becomes part of
            everyday life. Designed to accompany every moment, our pieces combine contemporary
            aesthetics with timeless craftsmanship.
          </p>
          <a href="#" className={styles.bannerLink}>
            Explore the Collection
          </a>
        </div>
      </div>

      <div className={styles.gridSection}>
        <ProductGrid products={rowTwo} infoHeight={96} priceFontSize={12} />
        <ProductGrid products={rowThree} infoHeight={96} priceFontSize={12} />
      </div>

      <div className={styles.exploreMoreWrap}>
        <button type="button" className={styles.exploreMore}>
          Explore More
        </button>
      </div>

      <Footer />
    </main>
  );
}
