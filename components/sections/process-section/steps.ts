import {
  ClipboardList,
  HeartHandshake,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const steps = [
  {
    number: "1",
    title: "Konsultacja",
    text: "Rozmawiamy o Twoich oczekiwaniach i potrzebach. To spokojny początek naszej wizyty.",
    subtitle: "Zaczynamy od rozmowy",
    icon: MessageCircle,
  },
  {
    number: "2",
    title: "Indywidualny plan",
    text: "Dobieramy zabieg i technikę odpowiednią do Twojej urody oraz kondycji skóry. Omawiamy kolejne etapy wizyty i wspólnie ustalamy plan działania, aby efekt był naturalny, harmonijny i dopasowany właśnie do Ciebie.",
    subtitle: "Twój plan, Twoje potrzeby",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Spokojny zabieg",
    text: "Dbam o Twój komfort i dokładnie wyjaśniam każdy etap wizyty. Pracuję spokojnie i precyzyjnie, a Ty możesz na bieżąco zadawać pytania i mieć pewność, że wszystko przebiega w dobrych warunkach.",
    subtitle: "W dobrych rękach",
    icon: Sparkles,
  },
  {
    number: "4",
    title: "Pielęgnacja po wizycie",
    text: "Po zabiegu otrzymujesz jasne zalecenia oraz mały krem do pielęgnacji w domu. Podpowiadam, jak zadbać o skórę w kolejnych dniach, czego unikać i na co zwrócić uwagę, aby wspierać gojenie oraz utrzymać piękny efekt na dłużej.",
    subtitle: "Dbamy o efekt także później",
    icon: HeartHandshake,
  },
];

export type ProcessStep = (typeof steps)[number];