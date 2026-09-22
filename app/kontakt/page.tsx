import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/site-config";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <PageIntro
          title="Porozmawiajmy"
          description="Napisz lub zadzwoń, aby umówić konsultację i dowiedzieć się więcej."
        />
        <address className={styles.contactDetails}>
          <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
          <a href={siteConfig.email.href}>{siteConfig.email.display}</a>
          <p>{siteConfig.address.lines.join(", ")}</p>
        </address>
      </section>
    </PageShell>
  );
}
