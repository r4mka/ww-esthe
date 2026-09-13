import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter} id="contact">
      <p>WW - ESTHE</p>
      <a href="mailto:hello@example.com">hello@example.com</a>
      <div className={styles.footerLinks}>
        <a href="#contact">Instagram</a>
        <a href="#contact">Facebook</a>
      </div>
    </footer>
  );
}
