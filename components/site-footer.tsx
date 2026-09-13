import Link from "next/link";
import {
  AddressIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter} id="contact">
      <div className={styles.footerContent}>
        <div className={styles.footerGroup}>
          <h2 className={styles.footerHeading}>Kontakt</h2>
          <a className={styles.footerItem} href="tel:+48780182458">
            <PhoneIcon className={styles.footerIcon} />
            <span>+48 780 182 458</span>
          </a>
          <a
            className={styles.footerItem}
            href="mailto:wiktoria.warylak@esthe.pl"
          >
            <MailIcon className={styles.footerIcon} />
            <span>wiktoria.warylak@esthe.pl</span>
          </a>
          <address className={`${styles.address} ${styles.footerItem}`}>
            <AddressIcon className={styles.footerIcon} />
            <a
              href="https://maps.app.goo.gl/8EGQF2ho8o2eJ4Ji7"
              target="_blank"
              rel="noreferrer"
            >
              ul. Racławicka 1/4
              <br />
              70-811 Szczecin
            </a>
          </address>
        </div>

        <nav className={styles.footerGroup} aria-label="Nawigacja">
          <h2 className={styles.footerHeading}>Nawigacja</h2>
          <Link href="/">Strona główna</Link>
          <Link href="/zabiegi">Zabiegi</Link>
          <Link href="/cennik">Cennik</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        <nav className={styles.footerGroup} aria-label="Media społecznościowe">
          <h2 className={styles.footerHeading}>Media społecznościowe</h2>
          <a
            className={styles.footerItem}
            href="https://instagram.com/wiktoria.warylak.esthe"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className={styles.footerIcon} />
            Instagram
          </a>
          <a
            className={styles.footerItem}
            href="https://www.facebook.com/p/Wiktoria-Warylak-PMU-61571133683099/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className={styles.footerIcon} />
            Facebook
          </a>
        </nav>

        <nav className={styles.footerGroup} aria-label="Informacje prawne">
          <h2 className={styles.footerHeading}>Informacje prawne</h2>
          <Link href="/regulamin">Regulamin</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <span className={styles.footerDivider} aria-hidden="true" />
          <p className={styles.copyright}>
            © 2026 WW - ESTHE. Wszelkie prawa zastrzeżone.
          </p>
        </nav>
      </div>
    </footer>
  );
}
