"use client";

import { useState } from "react";
import { ChevronDownRasterIcon } from "@/components/icons/Icon";
import styles from "./Accordion.module.css";

export type AccordionItem = {
  label: string;
  content?: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={item.label} className={styles.row} data-first={i === 0}>
          <button
            type="button"
            className={styles.header}
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className={styles.label}>{item.label}</span>
            <ChevronDownRasterIcon size={13} className={styles.chevron} data-open={openIndex === i} />
          </button>
          {openIndex === i && item.content && <p className={styles.content}>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
