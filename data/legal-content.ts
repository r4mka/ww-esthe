import { siteConfig } from "./site-config";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

const { company, address, email, phone, legal } = siteConfig;

export const legalLastUpdated = "1 października 2026";

export const privacyPolicySections = [
  {
    heading: "Administrator danych",
    paragraphs: [
      `Administratorem Twoich danych osobowych jest ${company.legalName}, ${company.registeredAddress[0]}, ${company.registeredAddress[1]}, NIP: ${company.nip}, REGON: ${company.regon}.`,
      `Kontakt w sprawach dotyczących danych osobowych: ${email.display} lub ${phone.display}.`,
    ],
  },
  {
    heading: "Jakie dane zbieramy",
    paragraphs: [
      "Przetwarzamy dane podane dobrowolnie podczas kontaktu lub umawiania wizyty, takie jak imię, numer telefonu i adres e-mail, a także informacje przekazane podczas wiadomości w mediach społecznościowych.",
    ],
  },
  {
    heading: "Cel i podstawa przetwarzania",
    list: [
      "Umówienie i realizacja wizyty oraz kontakt w tej sprawie (art. 6 ust. 1 lit. b RODO).",
      "Wypełnienie obowiązków księgowych i podatkowych (art. 6 ust. 1 lit. c RODO).",
      "Marketing własnych usług, wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO).",
    ],
  },
  {
    heading: "Okres przechowywania danych",
    paragraphs: [
      "Dane przechowujemy przez czas niezbędny do realizacji wizyty oraz przez okres wymagany przepisami prawa podatkowego i księgowego, a dane przetwarzane na podstawie zgody — do jej wycofania.",
    ],
  },
  {
    heading: "Odbiorcy danych",
    paragraphs: [
      "Dane mogą być przekazywane podmiotom wspierającym nas w prowadzeniu działalności, w tym dostawcy hostingu strony oraz platformom Meta (Instagram, Facebook, Messenger, WhatsApp) w zakresie komunikacji prowadzonej za ich pośrednictwem.",
    ],
  },
  {
    heading: "Pliki cookie i analityka",
    paragraphs: [
      "Strona korzysta z plików cookie niezbędnych do jej działania oraz, za Twoją zgodą wyrażoną w banerze zgody, z plików cookie analitycznych (np. Google Analytics), które pomagają nam zrozumieć ruch na stronie. Zgodę możesz w każdej chwili zmienić, czyszcząc dane strony w ustawieniach przeglądarki.",
    ],
  },
  {
    heading: "Twoje prawa",
    list: [
      "Prawo dostępu do danych oraz otrzymania ich kopii.",
      "Prawo do sprostowania i usunięcia danych.",
      "Prawo do ograniczenia i wniesienia sprzeciwu wobec przetwarzania.",
      "Prawo do przenoszenia danych.",
      "Prawo do cofnięcia zgody w dowolnym momencie.",
      "Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
    ],
  },
  {
    heading: "Dobrowolność podania danych",
    paragraphs: [
      "Podanie danych jest dobrowolne, ale niezbędne do umówienia i realizacji wizyty.",
    ],
  },
] satisfies LegalSection[];

export const termsSections = [
  {
    heading: "Postanowienia ogólne",
    paragraphs: [
      `Niniejszy regulamin określa zasady umawiania i realizacji zabiegów świadczonych przez ${company.legalName} w salonie pod adresem ${address.lines[0]}, ${address.lines[1]}.`,
    ],
  },
  {
    heading: "Rezerwacja wizyty",
    paragraphs: [
      "Wizytę można umówić telefonicznie, e-mailowo lub za pośrednictwem mediów społecznościowych. Rezerwacja jest potwierdzana indywidualnie przez Salon.",
    ],
  },
  {
    heading: "Odwołanie i zmiana terminu",
    paragraphs: [
      "Termin wizyty można odwołać lub przełożyć najpóźniej 24 godziny przed jej rozpoczęciem. Brak odwołania w tym czasie lub nieobecność na wizycie może skutkować odmową dalszych rezerwacji lub koniecznością wpłaty zadatku przy kolejnym umawianiu terminu.",
    ],
  },
  {
    heading: "Przed zabiegiem",
    paragraphs: [
      "Klientka zobowiązana jest do poinformowania o stanie zdrowia, przyjmowanych lekach, alergiach, ciąży lub innych przeciwwskazaniach mogących mieć wpływ na przebieg i bezpieczeństwo zabiegu.",
    ],
  },
  {
    heading: "Przebieg zabiegu i zalecenia",
    paragraphs: [
      "Każdy zabieg poprzedzony jest rozmową i doborem odpowiedniego planu działania. Po zabiegu Klientka otrzymuje indywidualne zalecenia pielęgnacyjne, których przestrzeganie wpływa na jakość i trwałość efektów.",
    ],
  },
  {
    heading: "Płatności",
    paragraphs: [
      "Płatność za zabieg następuje w salonie, zgodnie z aktualnym cennikiem dostępnym na stronie. Akceptowane formy płatności ustalane są indywidualnie.",
    ],
  },
  {
    heading: "Reklamacje",
    paragraphs: [
      `Reklamacje dotyczące wykonanej usługi można zgłaszać pod adresem ${email.display} lub telefonicznie: ${phone.display}, w terminie 14 dni od dnia wykonania zabiegu.`,
    ],
  },
  {
    heading: "Ochrona danych osobowych",
    paragraphs: [
      `Zasady przetwarzania danych osobowych opisane są w dokumencie dostępnym pod adresem ${legal.privacyPolicyPath}.`,
    ],
  },
  {
    heading: "Postanowienia końcowe",
    paragraphs: [
      "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego. Regulamin obowiązuje od dnia jego publikacji na stronie internetowej.",
    ],
  },
] satisfies LegalSection[];
