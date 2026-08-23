import { MenuColumn } from "./MenuColumn";
import {
  categoriesColumns,
  collectionsLeftColumn,
  collectionsRightColumn,
  giftTiles,
  highJewelryColumn,
} from "./megaMenuData";
import styles from "./MegaMenu.module.css";

export type MegaMenuKey = "categories" | "collections" | "gift" | "highJewelry";

/**
 * Mega-menu photography — sourced from client-provided `images.zip`, organized
 * by folder (Categories / Collections / Gift / High Jewelry) and pre-cropped
 * to exact Figma dimensions (verified: 217x272, 199x234, 394x496, 408x272).
 * Copied as-is into /public/images/mega-menu, renamed only for path clarity —
 * see the mapping comment above each panel below for original filename → new name.
 *
 * ⚠️ ORDERING CAVEAT: Figma's MCP tool is currently rate-limited, so the exact
 * left-to-right / column assignment for each image within a panel could not
 * be re-verified against the file. Images are placed in the order they were
 * provided (sorted filename order within each folder). Positions, sizes, and
 * which panel each image belongs to ARE verified (folder + pixel dimensions
 * match Figma exactly) — only the specific left/right order within a panel is
 * unconfirmed. Please check this against Figma and let me know if any need
 * to be swapped; it's a one-line reorder in each array below.
 */

// Categories (25:1125) — mapped to columns in provided-file order:
// category-1 <- ..._951ad1c0..., category-2 <- ...b79083a9..., category-3 <- ...c1f1e774..., category-4 <- ...92dd53e7...
const categoryImages = [
  "/images/mega-menu/categories/category-1.png",
  "/images/mega-menu/categories/category-2.png",
  "/images/mega-menu/categories/category-3.png",
  "/images/mega-menu/categories/category-4.png",
];

// Collections (25:1184) — hero <- ...bebe7fed... (394x496); grid-1..6 <- remaining 199x234 files, sorted order
const collectionsGridImages = [
  "/images/mega-menu/collections/grid-1.png",
  "/images/mega-menu/collections/grid-2.png",
  "/images/mega-menu/collections/grid-3.png",
  "/images/mega-menu/collections/grid-4.png",
  "/images/mega-menu/collections/grid-5.png",
  "/images/mega-menu/collections/grid-6.png",
];

// Gift (25:1171) — mapped to tiles in provided-file order: gift-1 <- ...2656915d..., gift-2 <- ...de3809dc..., gift-3 <- ...3ca0933f...
const giftImages = [
  "/images/mega-menu/gift/gift-1.png",
  "/images/mega-menu/gift/gift-2.png",
  "/images/mega-menu/gift/gift-3.png",
];

// High Jewelry (25:1109) — image-1 (left, x181) <- ...11cc10e0..., image-2 (Frame 152, x762) <- ...bebe7fed..., image-3 (Frame 153, x1184) <- ...4f118ebb...
const highJewelryImages = [
  "/images/mega-menu/high-jewelry/image-1.png",
  "/images/mega-menu/high-jewelry/image-2.png",
  "/images/mega-menu/high-jewelry/image-3.png",
];

/** Categories panel — node 25:1125, height 553px */
function CategoriesPanel() {
  return (
    <div className={styles.panel} data-panel="categories">
      <div className={styles.categoriesRow}>
        {categoriesColumns.map((col, i) => (
          <div className={styles.categoriesItem} key={col.title}>
            <img
              src={categoryImages[i]}
              alt={col.title}
              width={217}
              height={272}
              className={styles.categoriesImage}
            />
            <MenuColumn title={col.title} items={col.items} align="center" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Collections panel — node 25:1184, height 555px */
function CollectionsPanel() {
  return (
    <div className={styles.panel} data-panel="collections">
      <div className={styles.collectionsRow}>
        <div className={styles.collectionsLeft}>
          <img
            src="/images/mega-menu/collections/hero.png"
            alt="Collection feature"
            width={394}
            height={496}
            className={styles.collectionsHeroImage}
          />
          <MenuColumn title={collectionsLeftColumn.title} items={collectionsLeftColumn.items} />
        </div>
        <div className={styles.collectionsRight}>
          <div className={styles.collectionsGrid}>
            {collectionsGridImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Collection piece ${i + 1}`}
                width={199}
                height={234}
                className={styles.collectionsGridImage}
              />
            ))}
          </div>
          <MenuColumn title={collectionsRightColumn.title} items={collectionsRightColumn.items} />
        </div>
      </div>
    </div>
  );
}

/** Gift panel — node 25:1171, height 430px */
function GiftPanel() {
  return (
    <div className={styles.panel} data-panel="gift">
      <div className={styles.giftRow}>
        {giftTiles.map((tile, i) => (
          <div className={styles.giftItem} key={tile.caption}>
            <img
              src={giftImages[i]}
              alt={tile.caption}
              width={408}
              height={272}
              className={styles.giftImage}
            />
            <a href="#" className={styles.giftCaption}>
              {tile.caption}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/** High Jewelry panel — node 25:1109, height 555px */
function HighJewelryPanel() {
  return (
    <div className={styles.panel} data-panel="highJewelry">
      <div className={styles.hjRow}>
        {/* x-positions match Figma exactly: image(181) -> text(603) -> Frame 152(762) -> Frame 153(1184) */}
        <img
          src={highJewelryImages[0]}
          alt="High Jewelry feature"
          width={394}
          height={496}
          className={`${styles.hjImage} ${styles.hjImage1}`}
        />
        <div className={styles.hjTextColumn}>
          <MenuColumn title={highJewelryColumn.title} items={highJewelryColumn.items} align="right" />
        </div>
        <img
          src={highJewelryImages[1]}
          alt="High Jewelry feature (Frame 152)"
          width={394}
          height={496}
          className={`${styles.hjImage} ${styles.hjImage2}`}
        />
        <img
          src={highJewelryImages[2]}
          alt="High Jewelry feature (Frame 153)"
          width={394}
          height={496}
          className={`${styles.hjImage} ${styles.hjImage3}`}
        />
      </div>
    </div>
  );
}

const panels: Record<MegaMenuKey, () => JSX.Element> = {
  categories: CategoriesPanel,
  collections: CollectionsPanel,
  gift: GiftPanel,
  highJewelry: HighJewelryPanel,
};

export function MegaMenu({ activeKey }: { activeKey: MegaMenuKey | null }) {
  if (!activeKey) return null;
  const Panel = panels[activeKey];
  return (
    <div className={styles.overlay} data-open="true">
      <Panel />
    </div>
  );
}
