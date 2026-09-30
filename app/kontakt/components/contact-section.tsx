import { InstagramIcon, MessengerIcon, WhatsAppIcon } from "@/components/icons";
import { PageSection } from "@/components/page-section";
import { siteConfig } from "@/data/site-config";

import styles from "./contact-section.module.css";

const channels = [
  {
    name: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: WhatsAppIcon,
  },
  {
    name: "Instagram",
    href: siteConfig.bookingUrl,
    icon: InstagramIcon,
  },
  {
    name: "Messenger",
    href: siteConfig.social.messenger,
    icon: MessengerIcon,
  },
];

export function ContactSection() {
  return (
    <PageSection
      title="Napisz do mnie"
      id="napisz-do-mnie"
      description="Odpowiadam na wiadomości najczęściej w ciągu dnia roboczego. Napisz kilka słów o tym, co Cię interesuje, a wspólnie ustalimy termin."
    >
      <ul className={styles.channelList}>
        {channels.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <a
              className={`button button-secondary ${styles.channelButton}`}
              aria-label={name}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className={styles.channelIcon} />
            </a>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
