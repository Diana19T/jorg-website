"use client";

import { useState } from "react";
import styles from "./FilterBar.module.css";

type FilterBarProps = {
  chips?: string[]; // New Arrivals has no chip row at all — Wedding Rings does
  defaultActive?: string;
  productCount: number;
  buttonLetterSpacing?: number; // Wedding Rings: 7px (hand-verified); New Arrivals: 0.84px (Figma data)
};

export function FilterBar({ chips = [], defaultActive, productCount, buttonLetterSpacing = 7 }: FilterBarProps) {
  const [active, setActive] = useState(defaultActive ?? chips[0]);

  return (
    <div className={styles.bar} data-has-chips={chips.length > 0}>
      {chips.length > 0 && (
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
      )}

      <div className={styles.right}>
        <span className={styles.count}>{productCount} products</span>
        <button type="button" className={styles.filterButton} style={{ letterSpacing: buttonLetterSpacing }}>
          Filter and sort
        </button>
      </div>
    </div>
  );
}
