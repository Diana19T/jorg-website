import styles from "./ProductCard.module.css";

export type Product = {
  name: string;
  price: string;
  imageSrc: string;
  href?: string;
};

export function ProductCard({ name, price, imageSrc, href = "#" }: Product) {
  return (
    <a href={href} className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={name} width={427} height={533} className={styles.image} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </a>
  );
}