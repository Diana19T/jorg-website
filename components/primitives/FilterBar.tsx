"use client";

import { useState } from "react";
import styles from "./FilterBar.module.css";

type FilterBarProps = {
  chips: string[];
  defaultActive?: string;
  productCount: number;
};

export function FilterBar({ chips, defaultActive, productCount }: FilterBarProps) {
  const [active, setActive] = useState(defaultActive ?? chips[0]);

  return (
    <div className={styles.bar}>
      <ul className={styles.chips}>
        {chips.map((chip) => (
          <li key={chip}>
            <button
              type="button"
              className={styles.chip}
              data-active={active === chip}
              onClick={() => setActive(chip)}
            >
              {chip}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <span className={styles.count}>{productCount} products</span>
        <button type="button" className={styles.filterButton}>
          Filter and sort
        </button>
      </div>
    </div>
  );
}
