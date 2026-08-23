"use client";

import { ArrowRightIcon } from "@/components/icons/Icon";
import styles from "./Footer.module.css";

const aboutLinks = ["Philosophy", "Collections", "Craftsmanship", "Journal"]; // 60:3257
const servicesLinks = ["Appointments", "Packaging", "Delivery & Returns", "FAQ"]; // 60:3272
const contactLines = ["+34 836 950 35 45", "sales@jorg.com"]; // 60:3287
const followLinks = ["Instagram", "Pinterest", "YouTube"]; // 60:3295

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.dividerTop} />
      <hr className={styles.dividerMid} />

      <div className={styles.top}>
        <div className={styles.storeLocator}>
          <div className={styles.introBlock}>
            <h2 className={styles.heading}>Store locator</h2>
            <p className={styles.body}>
              Visit our boutiques and discover each collection in a personal atmosphere.
            </p>
          </div>
          {/* Real destination becomes a Next.js <Link> once routing is wired up. */}
          <a href="#" className={styles.textLink}>
            Find a Boutique
          </a>
          <hr className={styles.dividerShort} />
        </div>

        <div className={styles.stayInformed}>
          <div className={styles.introBlock}>
            <h2 className={styles.heading}>Stay informed</h2>
            <p className={styles.body}>
              Receive invitations to exclusive launches, events and new collections.
            </p>
          </div>
          <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.emailLabel}>
              <span className={styles.visuallyHidden}>Email</span>
              <input type="email" placeholder="E-mail*" required />
            </label>
            <button type="submit" aria-label="Subscribe">
              <ArrowRightIcon />
            </button>
          </form>
          <hr className={styles.dividerLong} />
        </div>
      </div>

      <div className={styles.linksRow}>
        <nav aria-label="About">
          <p className={styles.columnLabel}>About</p>
          <ul className={styles.columnList}>
            {aboutLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className={styles.columnLabel}>Services</p>
          <ul className={styles.columnList}>
            {servicesLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contact">
          <p className={styles.columnLabel}>Contact</p>
          <ul className={styles.columnList}>
            {contactLines.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Follow">
          <p className={styles.columnLabel}>Follow</p>
          <ul className={styles.columnList}>
            {followLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className={styles.copyright}>© 2026 JORG. All rights reserved</p>
    </footer>
  );
}
