import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <div className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={imageAlt} width={1710} height={534} className={styles.image} />
      <div className={styles.textBlock}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}
