import type { Metadata } from "next";
import VarmeClient from "./VarmeClient";

export const metadata: Metadata = {
  title: "Varmepumpe Silkeborg | Varme og varmepumper",
  description:
    "Varmepumper, fjernvarme, gulvvarme og centralvarme i Silkeborg. Autoriseret VVS-installatør. Spar op til 70% på varmeregningen.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/varme-varmepumper",
    languages: { "da-DK": "https://silkeborg-vvs.dk/varme-varmepumper" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Varmepumpe Silkeborg | Varme og varmepumper",
    description: "Varmepumper, fjernvarme, gulvvarme og centralvarme i Silkeborg. Spar op til 70% på varmeregningen. Få tilbud.",
    images: ["/images/varmeinstallation-1.jpg"],
  },
  openGraph: {
    title: "Varmepumpe Silkeborg | Varme og varmepumper",
    description: "Installation af varmepumper, fjernvarme, gulvvarme og centralvarme i Silkeborg. Spar op til 70%.",
    url: "https://silkeborg-vvs.dk/varme-varmepumper",
    images: [{ url: "/images/varmeinstallation-1.jpg", alt: "Varmepumpe installation i Silkeborg" }],
  },
};

export default function VarmePage() {
  return <VarmeClient />;
}
