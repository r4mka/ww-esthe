export const siteConfig = {
  businessName: "WW - ESTHE",
  description:
    "Profesjonalne zabiegi estetyczne i makijaż permanentny w Szczecinie.",
  locale: "pl-PL",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: {
    display: "+48 780 182 458",
    href: "tel:+48780182458",
  },
  email: {
    display: "wiktoria.warylak@esthe.pl",
    href: "mailto:wiktoria.warylak@esthe.pl",
  },
  address: {
    lines: ["ul. Racławicka 1/4", "70-811 Szczecin"],
    mapsUrl: "https://maps.app.goo.gl/8EGQF2ho8o2eJ4Ji7",
  },
  social: {
    instagram: "https://instagram.com/wiktoria.warylak.esthe",
    facebook: "https://www.facebook.com/p/Wiktoria-Warylak-PMU-61571133683099/",
  },
  bookingUrl: "https://ig.me/m/wiktoria.warylak.esthe",
  openingHours: [
    { days: "Poniedziałek - Piątek", hours: "09:00 - 18:00" },
    { days: "Sobota", hours: "10:00 - 14:00" },
  ],
  legal: {
    copyrightYear: 2026,
    privacyPolicyPath: "/polityka-prywatnosci",
    termsPath: "/regulamin",
  },
} as const;
