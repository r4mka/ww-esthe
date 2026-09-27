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
        image="/images/heros/hero-5.JPG"
  desktopImage="/images/hero-contact.jpg"
        imageAlt="Portret klientki WW-Esthe"
        desktopPosition="58% center"
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
