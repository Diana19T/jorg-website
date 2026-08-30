import styles from "./ProductCard.module.css";

export type Product = {
  name: string;
  price: string;
  imageSrc: string;
  href?: string;
};

type ProductCardProps = Product & {
  infoHeight?: number; // Wedding Rings: 93px; New Arrivals: 96px (both from Figma)
  priceFontSize?: number; // Wedding Rings: 13px; New Arrivals: 12px (both from Figma)
};

export function ProductCard({ name, price, imageSrc, href = "#", infoHeight = 93, priceFontSize = 13 }: ProductCardProps) {
  return (
    <a href={href} className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={name} width={427} height={533} className={styles.image} />
      <div className={styles.info} style={{ height: infoHeight }}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price} style={{ fontSize: priceFontSize }}>
          {price}
        </p>
      </div>
    </a>
  );
}