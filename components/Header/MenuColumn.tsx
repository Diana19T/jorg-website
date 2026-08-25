import styles from "./MenuColumn.module.css";

type MenuItem = string | { label: string; href: string };

type MenuColumnProps = {
  title: string;
  items: MenuItem[];
  align?: "left" | "center" | "right";
};

export function MenuColumn({ title, items, align = "left" }: MenuColumnProps) {
  return (
    <div className={styles.column} data-align={align}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          // Real destination becomes a Next.js <Link> once every menu target has a page.
          const href = typeof item === "string" ? "#" : item.href;
          return (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
