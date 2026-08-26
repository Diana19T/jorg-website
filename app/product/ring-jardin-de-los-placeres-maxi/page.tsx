import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Breadcrumb } from "@/components/primitives/Breadcrumb";
import { ImageGallery } from "@/components/primitives/ImageGallery";
import { Accordion } from "@/components/primitives/Accordion";
import { ProductGrid } from "@/components/primitives/ProductGrid";
import type { Product } from "@/components/primitives/ProductCard";
import { ChevronLeftIcon, ChevronRightIcon, MapMarkerIcon, ArrowsHIcon } from "@/components/icons/Icon";
import styles from "./page.module.css";

const GALLERY_BASE = "/images/product/ring-jardin-de-los-placeres-maxi";

const galleryImages = [
  { src: `${GALLERY_BASE}/gallery-1.png`, alt: "Ring Jardin de los Placeres Maxi, view 1", background: "#e9e9e9" },
  { src: `${GALLERY_BASE}/gallery-2.png`, alt: "Ring Jardin de los Placeres Maxi, view 2", background: "#dedede" },
  { src: `${GALLERY_BASE}/gallery-3.png`, alt: "Ring Jardin de los Placeres Maxi, view 3", background: "#dedede" },
];

const swatches = [
  { src: `${GALLERY_BASE}/swatch-1.png`, alt: "8KT yellow gold", active: true },
  { src: `${GALLERY_BASE}/swatch-2.png`, alt: "8KT white gold", active: false },
];

const accordionItems = [{ label: "Product details" }, { label: "Shipping & Returns" }, { label: "Payment" }];

const relatedProducts: Product[] = [
  { name: "Luna Chain", price: "$3,400", imageSrc: "/images/product/related/luna-chain.png" },
  { name: "Quiet Glow", price: "$2,650", imageSrc: "/images/product/related/quiet-glow.png" },
  { name: "Soft Gravity", price: "$3,780", imageSrc: "/images/product/related/soft-gravity.png" },
  { name: "Noir Element", price: "$4,150", imageSrc: "/images/product/related/noir-element.png" },
];

export default function ProductDetailPage() {
  return (
    <main className={styles.page}>
      <Header />

      <Breadcrumb
        items={[
          { label: "Jewelry" }, // no dedicated Jewelry index page in Figma — left non-functional
          { label: "Rings" }, // no dedicated Rings index page in Figma — left non-functional
          { label: "Ring Jardin de los Placeres Maxi" },
        ]}
      />

      <div className={styles.mainRow}>
        <ImageGallery images={galleryImages} />

        <div className={styles.infoPanel}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>Ring Jardin de los Placeres Maxi</h1>
            <div className={styles.priceRow}>
              <p className={styles.price}>€19,430 EUR</p>
            </div>
          </div>

          <div className={styles.detailsBlock}>
            <div className={styles.materialBlock}>
              <p className={styles.materialLabel}>8KT yellow gold</p>
              <div className={styles.swatchRow}>
                {swatches.map((swatch) => (
                  <button
                    key={swatch.alt}
                    type="button"
                    className={styles.swatch}
                    data-active={swatch.active}
                    aria-label={swatch.alt}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={swatch.src} alt={swatch.alt} width={68} height={68} />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.sizeRow}>
              <span>Find your size</span>
              <ArrowsHIcon size={18} />
            </div>

            <div className={styles.buyBlock}>
              <div className={styles.buttonStack}>
                <button type="button" className={styles.addToBag}>
                  Add to Bag
                </button>
                <button type="button" className={styles.buyNow}>
                  Buy Now
                </button>
              </div>

              <div className={styles.linksRow}>
                {/* FLAGGED — MISSING ICON: Figma's "Book an appointment" icon (imgSvg) is a
                    unique asset, not part of the reusable icon sprite, and no calendar/
                    appointment glyph exists anywhere in the icons frame either. Left as a
                    text-only link rather than inventing an icon. */}
                <a href="#" className={styles.linkWithIcon}>
                  Book an appointment
                </a>
                <a href="#" className={styles.linkWithIcon}>
                  <MapMarkerIcon size={14} />
                  Find a store
                </a>
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      <section className={styles.related}>
        <p className={styles.relatedTitle}>Curated For You</p>
        <a href="#" className={styles.relatedSeeAll}>
          see all
        </a>

        <div className={styles.relatedGridWrap}>
          <ProductGrid products={relatedProducts} />
          <button type="button" className={styles.carouselButton} data-side="prev" aria-label="Previous">
            <ChevronLeftIcon size={12} />
          </button>
          <button type="button" className={styles.carouselButton} data-side="next" aria-label="Next">
            <ChevronRightIcon size={12} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
