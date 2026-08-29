import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { PageHero } from "@/components/primitives/PageHero";
import { FilterBar } from "@/components/primitives/FilterBar";
import { ProductGrid } from "@/components/primitives/ProductGrid";
import type { Product } from "@/components/primitives/ProductCard";
import styles from "./page.module.css";

// Products transcribed in on-page order (left-to-right, top-to-bottom) from Category.png.
// Image assignment note: 16 grid images were supplied without per-product labeling —
// assigned here in sorted-filename order. Panel membership + dimensions (427x533) are
// certain; the specific image-to-product pairing is unverified against Figma (same
// caveat as the mega-menu images) since live Figma access was unavailable this session.
const products: Product[] = [
  { name: "Noir Signet Ring", price: "$2,450", imageSrc: "/images/category/wedding-rings/grid-1.png", href: "/product/ring-jardin-de-los-placeres-maxi" },
  { name: "Luna Diamond Band", price: "$3,180", imageSrc: "/images/category/wedding-rings/grid-2.png" },
  { name: "Obsidian Ring", price: "$4,900", imageSrc: "/images/category/wedding-rings/grid-3.png" },
  { name: "Pure Trace Ring", price: "$2,780", imageSrc: "/images/category/wedding-rings/grid-4.png" },
  { name: "Silent Glow Ring", price: "$3,850", imageSrc: "/images/category/wedding-rings/grid-5.png" },
  { name: "Halo Ring", price: "$2,290", imageSrc: "/images/category/wedding-rings/grid-6.png" },
  { name: "Eclipse Ring", price: "$5,400", imageSrc: "/images/category/wedding-rings/grid-7.png" },
  { name: "Golden Pulse Ring", price: "$3,050", imageSrc: "/images/category/wedding-rings/grid-8.png" },
  { name: "Muse Ring", price: "$2,950", imageSrc: "/images/category/wedding-rings/grid-9.png" },
  { name: "Aura Ring", price: "$3,920", imageSrc: "/images/category/wedding-rings/grid-10.png" },
  { name: "Celeste Ring", price: "$2,150", imageSrc: "/images/category/wedding-rings/grid-11.png" },
  { name: "Éclat Ring", price: "$4,300", imageSrc: "/images/category/wedding-rings/grid-12.png" },
  { name: "Luna Chain", price: "$3,400", imageSrc: "/images/category/wedding-rings/grid-13.png" },
  { name: "Quiet Glow", price: "$2,850", imageSrc: "/images/category/wedding-rings/grid-14.png" },
  { name: "Soft Gravity", price: "$3,780", imageSrc: "/images/category/wedding-rings/grid-15.png" },
  { name: "Noir Element", price: "$4,150", imageSrc: "/images/category/wedding-rings/grid-16.png" },
];

export default function WeddingRingsPage() {
  return (
    <main className={styles.page}>
      <Header />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Rings" }, // no dedicated Rings index page in Figma — left non-functional
          { label: "Wedding Rings" },
        ]}
      />

      <PageHero
        eyebrow="Exquisite Jewelry"
        title="Wedding Rings"
        imageSrc="/images/category/wedding-rings/hero.png"
        imageAlt="Wedding Rings"
      />

      <p className={styles.intro}>
        Discover rings that blend exquisite craftsmanship with modern design. From delicate
        styles to striking pieces with sculptural forms, each one is created to become part of
        your personal story.
      </p>

      <FilterBar
        chips={["View all", "Diamond", "White Gold", "Yellow Gold", "Classic"]}
        defaultActive="Diamond"
        productCount={84}
      />

      <div className={styles.gridSection}>
        <ProductGrid products={products} />
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
