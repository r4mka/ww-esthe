import { HeroPage } from "@/components/hero-page";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/site-config";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <PageShell>
      <HeroPage
        eyebrow="Kontakt"
        title="Porozmawiajmy o Twoich potrzebach."
        description="Napisz lub zadzwoń, aby umówić konsultację i dowiedzieć się więcej."
        image="/images/hero-mobile/hero-contact-2.jpg"
        desktopImage="/images/hero-contact.jpg"
        imageAlt="Portret klientki WW-Esthe"
      />
      <section className="section-shell">
        <address className={styles.contactDetails}>
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
          <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
          <p>{siteConfig.address.lines.join(", ")}</p>
        </address>
      </section>
    </PageShell>
  );
}
