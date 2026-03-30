import type { Metadata } from "next";
import AkutVVSClient from "./AkutVVSClient";

export const metadata: Metadata = {
  title: "Akut VVS Silkeborg | Døgnvagt VVS-service",
  description:
    "Akut VVS-service i Silkeborg med hurtig udrykning. Sprængte vandrør, tilstoppede afløb, vandskader og akutte VVS-problemer. Døgnvagt. Kontakt os.",
  alternates: {
    canonical: "https://silkeborg-vvs.dk/akut-vvs",
    languages: { "da-DK": "https://silkeborg-vvs.dk/akut-vvs" },
  },
  twitter: {
    card: "summary_large_image",
    title: "Akut VVS Silkeborg | Døgnvagt VVS-service",
    description: "Akut VVS-service i Silkeborg med hurtig udrykning. Sprængte vandrør, tilstoppede afløb og vandskader. Kontakt os nu!",
    images: ["/images/vvs-vaerktoj-2.jpg"],
  },
  openGraph: {
    title: "Akut VVS Silkeborg | Døgnvagt VVS-service",
    description: "Akut VVS-service i Silkeborg med hurtig udrykning. Sprængte vandrør, tilstoppede afløb og vandskader.",
    url: "https://silkeborg-vvs.dk/akut-vvs",
    images: [{ url: "/images/vvs-vaerktoj-2.jpg", alt: "Akut VVS-service og udrykning i Silkeborg" }],
  },
};

export default function AkutVVSPage() {
  return <AkutVVSClient />;
}
