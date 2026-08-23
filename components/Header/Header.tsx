"use client";

import { useState } from "react";
import { SearchIcon, BagIcon, UserIcon } from "@/components/icons/Icon";
import { MegaMenu, type MegaMenuKey } from "./MegaMenu";
import styles from "./Header.module.css";

type NavItem = {
  label: string;
  menuKey?: MegaMenuKey;
};

// Order + labels transcribed verbatim from Header Link nodes I25:1538;732:2523...2541
const navItems: NavItem[] = [
  { label: "NEW" },
  { label: "Gift", menuKey: "gift" },
  { label: "Collections", menuKey: "collections" },
  { label: "Categories", menuKey: "categories" },
  { label: "Classic Line" },
  { label: "High Jewelry", menuKey: "highJewelry" },
  { label: "About Us" },
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey | null>(null);

  return (
    <header className={styles.header} onMouseLeave={() => setActiveMenu(null)}>
      <div className={styles.bar}>
        <a href="#" className={styles.logo} aria-label="JORG home">
          JORG
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu(item.menuKey ?? null)}
              >
                {/* Real destination becomes a Next.js <Link> once routing is wired up. */}
                <a href="#" aria-haspopup={item.menuKey ? "true" : undefined} aria-expanded={item.menuKey ? activeMenu === item.menuKey : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button type="button" aria-label="Search">
            <SearchIcon alt="" />
          </button>
          <button type="button" aria-label="Bag">
            <BagIcon alt="" />
          </button>
          <button type="button" aria-label="Account">
            <UserIcon alt="" />
          </button>
        </div>
      </div>

      <MegaMenu activeKey={activeMenu} />
    </header>
  );
}
