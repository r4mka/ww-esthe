import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
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
          <a href="tel:+48123456789">+48 123 456 789</a>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <p>ul. Przykładowa 12, Szczecin</p>
        </address>
      </section>
    </PageShell>
  );
}
