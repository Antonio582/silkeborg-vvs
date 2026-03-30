import type { Metadata } from "next";
import PriserClient from "./PriserClient";

export const metadata: Metadata = {
  title: "VVS Priser Silkeborg | Gennemsigtige priser",
  description:
    "Se vores priser for VVS-arbejde i Silkeborg. Gennemsigtige og konkurrencedygtige priser for VVS-installation, varmepumper, blikkenslager og kloak. Kontakt os.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/priser",
    languages: { "da-DK": "https://silkeborg-vvs.dk/priser" },
  },
  twitter: {
    card: "summary_large_image",
    title: "VVS Priser Silkeborg | Gennemsigtige priser",
    description: "Se priser for VVS-arbejde i Silkeborg. Gennemsigtige priser for VVS, varmepumper, blikkenslager og kloak. Kontakt os for tilbud.",
    images: ["/images/kobberroer-1.jpg"],
  },
  openGraph: {
    title: "VVS Priser Silkeborg | Gennemsigtige priser",
    description: "Gennemsigtige priser for VVS-arbejde i Silkeborg. VVS-installation, varmepumper, blikkenslager og kloak.",
    url: "https://silkeborg-vvs.dk/priser",
    images: [{ url: "/images/kobberroer-1.jpg", alt: "VVS priser og materialer i Silkeborg" }],
  },
};

export default function PriserPage() {
  return <PriserClient />;
}
