import type { Metadata } from "next";
import KloakClient from "./KloakClient";

export const metadata: Metadata = {
  title: "Kloak Silkeborg | Kloakrenovering og afløbsarbejde",
  description:
    "Professionelt kloakarbejde i Silkeborg. Kloakseparering, kloakrenovering, TV-inspektion, afløbsrensning og dræning. Autoriseret kloakmester. Kontakt os.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/kloak-afloeb",
    languages: { "da-DK": "https://silkeborg-vvs.dk/kloak-afloeb" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kloak Silkeborg | Kloakrenovering og afløbsarbejde",
    description: "Professionelt kloakarbejde i Silkeborg. Kloakseparering, TV-inspektion og afløbsrensning. Autoriseret kloakmester. Kontakt os for tilbud.",
    images: ["/images/kloakreparation-1.jpg"],
  },
  openGraph: {
    title: "Kloak Silkeborg | Kloakrenovering og afløbsarbejde",
    description: "Professionelt kloakarbejde i Silkeborg. Kloakseparering, TV-inspektion og afløbsrensning.",
    url: "https://silkeborg-vvs.dk/kloak-afloeb",
    images: [{ url: "/images/kloakreparation-1.jpg", alt: "Kloakrenovering og afløbsarbejde i Silkeborg" }],
  },
};

export default function KloakPage() {
  return <KloakClient />;
}
