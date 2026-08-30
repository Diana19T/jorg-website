import { ProductCard, type Product } from "./ProductCard";
import styles from "./ProductGrid.module.css";

type ProductGridProps = {
  products: Product[];
  infoHeight?: number;
  priceFontSize?: number;
};

export function ProductGrid({ products, infoHeight, priceFontSize }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.name} {...product} infoHeight={infoHeight} priceFontSize={priceFontSize} />
      ))}
    </div>
  );
}
