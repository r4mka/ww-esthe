import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/site-config";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title="Porozmawiajmy"
        description="Napisz lub zadzwoń, aby umówić konsultację i dowiedzieć się więcej."
        image="/images/hero-contact.jpg"
        imageAlt="Kobieta w jasnym, eleganckim wnętrzu"
        mobilePosition="62% center"
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
