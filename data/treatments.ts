export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  imageAlt: string;
  duration: string;
  price: string;
  forWho: string;
  description: string;
  preparation: string[];
  contraindications: string[];
  aftercare: string[];
  faqs: { question: string; answer: string }[];
};

export const treatmentImages = [
  "/images/702902875_18062186222697649_8449637741904313717_n.jpg",
  "/images/491432162_18015506234697649_5081887183424975070_n.jpg",
  "/images/650099679_18052926815697649_2857778446659390710_n.jpg",
  "/images/798316773_18078078236697649_7996895775579899406_n.jpg",
];

export const treatments: Treatment[] = [
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust",
    shortDescription:
      "Subtelne podkreślenie kształtu, konturu i proporcji ust dopasowane do Twojej urody.",
    imageAlt: "Miejsce na zdjęcie modelowania ust",
    duration: "około 30 minut",
    price: "800–1000 zł",
    forWho:
      "Dla osób, które chcą delikatnie podkreślić kontur ust, poprawić ich proporcje, dodać objętości lub wyrównać asymetrię.",
    description:
      "Zabieg polega na precyzyjnym podaniu preparatu dopasowanego do potrzeb i anatomii ust. Przed zabiegiem omawiamy oczekiwania, możliwe efekty oraz przeciwwskazania.",
    preparation: [
      "Na kilka dni przed wizytą unikaj alkoholu i intensywnego opalania.",
      "Poinformuj osobę wykonującą zabieg o przyjmowanych lekach i stanie zdrowia.",
      "Jeśli masz skłonność do opryszczki, omów to podczas konsultacji.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywna opryszczka lub stan zapalny w miejscu zabiegu",
      "choroby autoimmunologiczne i zaburzenia krzepliwości krwi",
      "uczulenie na składniki preparatu",
    ],
    aftercare: [
      "Przez pierwsze 24 godziny zachowaj szczególną higienę okolicy zabiegowej.",
      "Przez kilka dni unikaj alkoholu, intensywnego wysiłku, sauny i wysokiej temperatury.",
      "Końcowy efekt oceniamy po ustąpieniu obrzęku, zwykle po kilku tygodniach.",
    ],
    faqs: [
      {
        question: "Czy efekt wygląda naturalnie?",
        answer:
          "Tak. Zakres zabiegu dobieramy do anatomii twarzy i oczekiwań, dlatego możliwe jest zarówno subtelne podkreślenie kształtu, jak i większa korekta.",
      },
      {
        question: "Czy zabieg jest bolesny?",
        answer:
          "Odczucia są indywidualne. Przed zabiegiem omawiamy możliwe sposoby zwiększenia komfortu wizyty.",
      },
      {
        question: "Jak długo utrzymuje się efekt?",
        answer:
          "Trwałość efektu zależy między innymi od użytego preparatu, stylu życia i indywidualnych cech organizmu.",
      },
    ],
  },
  {
    slug: "stymulatory-tkankowe",
    title: "Stymulatory tkankowe",
    shortDescription:
      "Zabieg wspierający poprawę jędrności, nawilżenia i jakości skóry twarzy, szyi lub dekoltu.",
    imageAlt: "Miejsce na zdjęcie stymulatorów tkankowych",
    duration: "około 30 minut",
    price: "od 900 zł",
    forWho:
      "Dla osób, które chcą poprawić napięcie, elastyczność i ogólną kondycję skóry oraz delikatnie zredukować oznaki jej wiotczenia.",
    description:
      "Stymulatory tkankowe wspierają naturalne procesy regeneracyjne skóry. Preparat i technikę pracy dobieramy indywidualnie podczas konsultacji, uwzględniając obszar zabiegowy i oczekiwany efekt.",
    preparation: [
      "Na kilka dni przed wizytą unikaj alkoholu i intensywnego opalania.",
      "Poinformuj osobę wykonującą zabieg o przyjmowanych lekach i alergiach.",
      "Przygotuj skórę bez intensywnych peelingów i drażniących kosmetyków.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne infekcje, opryszczka lub stan zapalny skóry",
      "choroby autoimmunologiczne i zaburzenia krzepliwości krwi",
      "uczulenie na składniki preparatu",
    ],
    aftercare: [
      "Przez 24 godziny unikaj nakładania makijażu na obszar zabiegowy.",
      "Przez około dwa tygodnie unikaj sauny, solarium i intensywnego nagrzewania skóry.",
      "Stosuj delikatną pielęgnację i ochronę przeciwsłoneczną SPF 50.",
    ],
    faqs: [
      {
        question: "Jak działa zabieg?",
        answer:
          "Zabieg dostarcza skórze składników aktywnych i wspiera jej naturalne procesy odnowy. Dokładny preparat dobieramy podczas konsultacji.",
      },
      {
        question: "Ile zabiegów warto wykonać?",
        answer:
          "Liczba wizyt zależy od kondycji skóry i założonego celu. Indywidualny plan omawiamy podczas konsultacji.",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-brwi",
    title: "Makijaż permanentny brwi",
    shortDescription:
      "Delikatne podkreślenie kształtu i koloru brwi metodą Soft Ombre lub Foxy.",
    imageAlt: "Miejsce na zdjęcie makijażu permanentnego brwi",
    duration: "około 2–3 godzin",
    price: "800 zł",
    forWho:
      "Dla osób, które chcą podkreślić kształt brwi i zaoszczędzić czas na codziennym makijażu.",
    description:
      "Podczas konsultacji dobieramy kształt, kolor i technikę do urody oraz oczekiwań. Zabieg wykonywany jest etapami, z uwzględnieniem procesu gojenia i ewentualnej dopigmentacji.",
    preparation: [
      "Przyjdź bez świeżej opalenizny i podrażnienia skóry w okolicy brwi.",
      "Poinformuj o przyjmowanych lekach i wcześniejszych zabiegach w tym obszarze.",
      "Ostateczny kształt i kolor omówimy przed rozpoczęciem zabiegu.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "aktywne stany zapalne lub infekcje skóry",
      "nieuregulowana cukrzyca i zaburzenia krzepliwości krwi",
      "terapia izotretynoiną lub świeże zabiegi w okolicy brwi",
    ],
    aftercare: [
      "Przez pierwsze dni utrzymuj okolicę zabiegową w czystości i nie pocieraj jej.",
      "Unikaj sauny, basenu, intensywnego wysiłku i opalania do czasu wygojenia.",
      "Dopigmentację wykonujemy po zakończeniu procesu gojenia, jeśli jest potrzebna.",
    ],
    faqs: [
      {
        question: "Czy kształt brwi ustalamy przed zabiegiem?",
        answer:
          "Tak. Przed zabiegiem omawiamy oczekiwania i wykonujemy wstępny rysunek kształtu.",
      },
      {
        question: "Czy potrzebna jest dopigmentacja?",
        answer:
          "Dopigmentowanie oceniamy po wygojeniu skóry. Jest to indywidualna kwestia zależna od skóry i oczekiwanego efektu.",
      },
    ],
  },
  {
    slug: "makijaz-permanentny-ust",
    title: "Makijaż permanentny ust",
    shortDescription:
      "Subtelne podkreślenie koloru i konturu ust dla uporządkowanego, świeżego efektu.",
    imageAlt: "Miejsce na zdjęcie makijażu permanentnego ust",
    duration: "około 2–3 godzin",
    price: "800 zł",
    forWho:
      "Dla osób, które chcą wyrównać kontur ust i podkreślić ich naturalny kolor.",
    description:
      "Kolor i kształt dobieramy indywidualnie. Zabieg poprzedza konsultacja oraz omówienie procesu gojenia i możliwej dopigmentacji.",
    preparation: [
      "Poinformuj o skłonności do opryszczki i wcześniejszych zabiegach ust.",
      "Unikaj podrażniania i intensywnego opalania ust przed wizytą.",
      "Zadbaj o dobre nawilżenie ust w dniach poprzedzających zabieg.",
    ],
    contraindications: [
      "aktywna opryszczka lub stan zapalny ust",
      "ciąża i karmienie piersią",
      "uczulenie na składniki pigmentu",
      "zaburzenia krzepliwości krwi",
    ],
    aftercare: [
      "Nie pocieraj ust i zachowaj szczególną higienę podczas gojenia.",
      "Unikaj sauny, basenu, opalania i intensywnego wysiłku do czasu wygojenia.",
      "Stosuj pielęgnację zaleconą po zabiegu.",
    ],
    faqs: [
      {
        question: "Czy kolor po wygojeniu będzie intensywny?",
        answer:
          "Kolor po wygojeniu jest zwykle delikatniejszy niż bezpośrednio po zabiegu. Jego intensywność dobieramy indywidualnie.",
      },
      {
        question: "Kiedy można wykonać dopigmentowanie?",
        answer:
          "Termin oceniamy po pełnym wygojeniu skóry, podczas kontroli pozabiegowej.",
      },
    ],
  },
  {
    slug: "mezoterapia-mikroiglowa",
    title: "Mezoterapia mikroigłowa",
    shortDescription:
      "Zabieg poprawiający wygląd i kondycję skóry twarzy, szyi oraz dekoltu.",
    imageAlt: "Miejsce na zdjęcie mezoterapii mikroigłowej",
    duration: "około 60 minut",
    price: "350–500 zł",
    forWho:
      "Dla osób, które chcą poprawić nawilżenie, gładkość i świeżość skóry.",
    description:
      "Mikronakłuwanie pobudza naturalne procesy odnowy skóry. Obszar zabiegowy i pielęgnację dobieramy podczas konsultacji.",
    preparation: [
      "Przyjdź z oczyszczoną skórą, bez intensywnego peelingu tuż przed wizytą.",
      "Poinformuj o aktywnych zmianach skórnych i przyjmowanych lekach.",
    ],
    contraindications: [
      "aktywne infekcje i stany zapalne skóry",
      "ciąża i karmienie piersią",
      "zaburzenia krzepliwości krwi",
      "terapia izotretynoiną",
    ],
    aftercare: [
      "Stosuj łagodną pielęgnację i ochronę SPF 50.",
      "Przez kilka dni unikaj sauny, basenu, intensywnego wysiłku i słońca.",
      "Nie wykonuj peelingów do czasu pełnego wyciszenia skóry.",
    ],
    faqs: [
      {
        question: "Czy skóra po zabiegu jest zaczerwieniona?",
        answer:
          "Przejściowe zaczerwienienie jest możliwe i zależy od indywidualnej reakcji skóry oraz intensywności zabiegu.",
      },
    ],
  },
  {
    slug: "rf-radiofrekwencja",
    title: "RF radiofrekwencja",
    shortDescription:
      "Zabieg wykorzystujący fale radiowe do pielęgnacji i poprawy napięcia skóry.",
    imageAlt: "Miejsce na zdjęcie radiofrekwencji",
    duration: "około 45–60 minut",
    price: "450–600 zł",
    forWho:
      "Dla osób, które chcą zadbać o napięcie i wygląd skóry twarzy lub dekoltu.",
    description:
      "Parametry zabiegu oraz obszar pracy dobieramy indywidualnie. Możliwe jest połączenie zabiegu z ampułką pielęgnacyjną.",
    preparation: [
      "Przed wizytą poinformuj o implantach, urządzeniach medycznych i stanie zdrowia.",
      "Przyjdź z oczyszczoną skórą, bez intensywnych kosmetyków drażniących.",
    ],
    contraindications: [
      "ciąża i karmienie piersią",
      "rozrusznik serca lub elektroniczne implanty medyczne",
      "aktywne stany zapalne skóry",
      "choroby i stany wymagające indywidualnej kwalifikacji",
    ],
    aftercare: [
      "Stosuj łagodną pielęgnację i nawadniaj skórę.",
      "Przez kilka dni unikaj intensywnego nagrzewania skóry.",
    ],
    faqs: [
      {
        question: "Czy zabieg jest odczuwalny?",
        answer:
          "Odczucia zależą od ustawień urządzenia i indywidualnej wrażliwości. Zabieg powinien być komfortowy.",
      },
    ],
  },
  {
    slug: "laserowe-usuwanie-brwi",
    title: "Laserowe usuwanie brwi",
    shortDescription:
      "Zabieg dla osób, które chcą usunąć niepożądany pigment z obszaru brwi.",
    imageAlt: "Miejsce na zdjęcie laserowego usuwania brwi",
    duration: "około 30 minut",
    price: "200 zł za sesję",
    forWho:
      "Dla osób zakwalifikowanych do bezpiecznego usunięcia pigmentu po konsultacji.",
    description:
      "Liczbę sesji i parametry zabiegu dobieramy indywidualnie po ocenie pigmentu oraz kondycji skóry.",
    preparation: [
      "Nie opalaj obszaru zabiegowego przed wizytą.",
      "Poinformuj o lekach, chorobach skóry i wcześniejszych zabiegach.",
    ],
    contraindications: [
      "świeża opalenizna i aktywny stan zapalny skóry",
      "ciąża i karmienie piersią",
      "skłonność do bliznowców",
      "choroby i leki wymagające indywidualnej kwalifikacji",
    ],
    aftercare: [
      "Chroń obszar przed słońcem i stosuj ochronę SPF.",
      "Nie zdrapuj złuszczającej się skóry i stosuj zaleconą pielęgnację.",
    ],
    faqs: [
      {
        question: "Ile sesji będzie potrzebnych?",
        answer:
          "Liczba sesji zależy od rodzaju, głębokości i koloru pigmentu. Zostanie omówiona po konsultacji.",
      },
    ],
  },
  {
    slug: "peelingi",
    title: "Peelingi",
    shortDescription:
      "Pielęgnacja dopasowana do potrzeb skóry: peeling chemiczny lub węglowy.",
    imageAlt: "Miejsce na zdjęcie peelingu",
    duration: "około 45 minut",
    price: "300–350 zł",
    forWho:
      "Dla osób, które chcą odświeżyć wygląd skóry i poprawić jej gładkość.",
    description:
      "Rodzaj peelingu dobieramy po ocenie skóry i rozmowie o oczekiwanym efekcie. Zabieg może wspierać odświeżenie i wyrównanie wyglądu skóry.",
    preparation: [
      "Na kilka dni przed zabiegiem unikaj intensywnych peelingów i opalania.",
      "Poinformuj o stosowanych kosmetykach i aktywnych zmianach skórnych.",
    ],
    contraindications: [
      "aktywne stany zapalne, infekcje lub podrażnienia skóry",
      "ciąża i karmienie piersią, zależnie od zastosowanego preparatu",
      "terapia izotretynoiną",
      "świeża opalenizna",
    ],
    aftercare: [
      "Stosuj delikatną pielęgnację i codzienną ochronę SPF 50.",
      "Nie zdrapuj złuszczającej się skóry i unikaj dodatkowych peelingów.",
      "Przez kilka dni unikaj sauny i intensywnego nagrzewania skóry.",
    ],
    faqs: [
      {
        question: "Jaki peeling będzie odpowiedni?",
        answer:
          "Rodzaj peelingu dobieramy podczas konsultacji do kondycji skóry i celu pielęgnacji.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}

export function getTreatmentImage(slug: string) {
  const treatmentIndex = treatments.findIndex(
    (treatment) => treatment.slug === slug,
  );
  return treatmentImages[treatmentIndex % treatmentImages.length];
}
