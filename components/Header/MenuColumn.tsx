import styles from "./MenuColumn.module.css";

type MenuColumnProps = {
  title: string;
  items: string[];
  align?: "left" | "center" | "right";
};

export function MenuColumn({ title, items, align = "left" }: MenuColumnProps) {
  return (
    <div className={styles.column} data-align={align}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            {/* Real destination becomes a Next.js <Link> once routing is wired up. */}
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
