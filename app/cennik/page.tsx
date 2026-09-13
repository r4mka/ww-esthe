import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import styles from "./pricing.module.css";

const priceCategories = [
  {
    name: "Makijaż permanentny",
    items: [
      ["Brwi met. Soft Ombre, Foxy", "800 zł"],
      ["Usta", "800 zł"],
      ["Dopigmentowanie 4–6 tyg.", "100 zł"],
      ["Dopigmentowanie do roku", "600 zł"],
    ],
  },
  {
    name: "Modelowanie ust",
    items: [
      ["1 ml", "700 zł"],
      ["Hialuronidaza miejscowa", "300 zł"],
      ["Hialuronidaza całe usta", "600 zł"],
    ],
  },
  {
    name: "Mezoterapia mikroigłowa",
    items: [
      ["Twarz", "350 zł"],
      ["Twarz / szyja / dekolt", "500 zł"],
    ],
  },
  {
    name: "Stymulatory / mezoterapia igłowa",
    items: [
      ["Twarz", "450–800 zł"],
      ["Okolica oka", "350–600 zł"],
      ["Twarz / dekolt", "500–900 zł"],
    ],
  },
  {
    name: "RF radiofrekwencja",
    items: [
      ["Twarz + ampułka", "450 zł"],
      ["Twarz / dekolt + ampułka", "600 zł"],
    ],
  },
  {
    name: "Laserowe usuwanie brwi",
    items: [
      ["1 sesja", "200 zł"],
      ["Ocieplenie / ochłodzenie brwi", "200 zł"],
    ],
  },
  {
    name: "Peelingi",
    items: [
      ["Peeling chemiczny", "350 zł"],
      ["Peeling węglowy", "300 zł"],
    ],
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <section className="section-shell">
        <PageIntro
          title="Cennik"
          description="Przejrzyste informacje o cenach. Ostateczna wycena zależy od indywidualnych potrzeb."
        />
        <div className={styles.priceList} aria-label="Cennik zabiegów">
          {priceCategories.map((category) => (
            <section className={styles.priceCategory} key={category.name}>
              <h2>{category.name}</h2>
              <dl>
                {category.items.map(([name, price]) => (
                  <div className={styles.priceRow} key={name}>
                    <dt>{name}</dt>
                    <dd>{price}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
