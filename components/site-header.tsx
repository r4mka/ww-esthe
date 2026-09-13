"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.siteHeader} relative flex-wrap`}>
      <Link
        className={styles.brand}
        href="/"
        aria-label="WW-Esthe home"
        onClick={closeMenu}
      >
        <Image
          className={styles.brandLogo}
          src="/images/logo2.png"
          alt="WW-Esthe"
          width={130}
          height={68}
          priority
        />
      </Link>
      <button
        className={styles.menuButton}
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
        <span className="block h-px w-5 bg-current" />
      </button>
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <ul className={styles.navList}>
          <li>
            <Link href="/zabiegi" onClick={closeMenu}>
              Zabiegi
            </Link>
          </li>
          <li>
            <Link href="/#gallery" onClick={closeMenu}>
              Galeria
            </Link>
          </li>
          <li>
            <Link href="/cennik" onClick={closeMenu}>
              Cennik
            </Link>
          </li>
          <li>
            <Link href="/kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
